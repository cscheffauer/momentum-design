import * as vscode from "vscode";
import fs from 'fs';
import _ from "lodash";
/**
 * Manages the Momentum webview panel
 */
class MomentumPanel {
  /**
   * Track the currently panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: MomentumPanel | undefined;

  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _disposables: vscode.Disposable[] = [];

  public static createOrShow(extensionUri: vscode.Uri) {
    // If we already have a panel, show it.
    // Otherwise, create a new panel.
    if (MomentumPanel.currentPanel) {
      MomentumPanel.currentPanel._panel.reveal();
    } else {
      MomentumPanel.currentPanel = new MomentumPanel(extensionUri);
    }
  }

  private constructor(extensionUri: vscode.Uri) {
    this._extensionUri = extensionUri;

    // Create and show a new webview panel
    this._panel = vscode.window.createWebviewPanel("momentum", "Momentum Design System", vscode.ViewColumn.Beside, {
      // Enable javascript in the webview
      enableScripts: true,

      // And restrict the webview to only loading content from our extension's `dist` directory.
      localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, "dist")],
    });

    // Set the webview's initial html content
    this._panel.webview.html = this._getHtmlForWebview();

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programatically
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case "alert":
            vscode.window.showErrorMessage(message.text);
            return;
        }
      },
      null,
      this._disposables
    );
  }

  public doRefactor() {
    // Send a message to the webview webview.
    // You can send any JSON serializable data.
    this._panel.webview.postMessage({ command: "refactor" });
  }

  public dispose() {
    MomentumPanel.currentPanel = undefined;

    // Clean up our resources
    this._panel.dispose();

    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private _replaceContentInFile(filePath: string, stringToReplace: string, replacement: vscode.Uri) {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(stringToReplace, replacement.toString());

      fs.writeFile(filePath, result, 'utf8', function (err) {
         if (err) {
          return console.log(err);
         }
      });
    });
  }

  private _getHtmlForWebview() {
    // get manifest from
    const manifestPath = vscode.Uri.joinPath(this._extensionUri, "dist", ".vite", "manifest.json").fsPath;
    const manifest = require(manifestPath);
    const mainScript = manifest["index.html"]["file"];
    const mainStyle = manifest["index.html"]["css"][0];
    const foundEntry = _.pickBy(manifest, (_1, key) => 
      _.includes(key, "Inter.var.woff2")
    );
    const mainFont = Object.values(foundEntry)[0].file;

    const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, "dist", mainScript);
    const scriptUri = this._panel.webview.asWebviewUri(scriptPathOnDisk);
    const stylePathOnDisk = vscode.Uri.joinPath(this._extensionUri, "dist", mainStyle);
    const styleUri = this._panel.webview.asWebviewUri(stylePathOnDisk);
    const fontPathOnDisk = vscode.Uri.joinPath(this._extensionUri, "dist", mainFont);
    const fontUri = this._panel.webview.asWebviewUri(fontPathOnDisk);

    this._replaceContentInFile(styleUri.fsPath, mainFont, fontUri);

    // TODO: to be cleaner, load the index.html itself from the dist here and replace the href/src
    // in it here:
    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
				<meta name="theme-color" content="#000000">
				<title>Momentum Design</title>
				<link rel="stylesheet" type="text/css" href="${styleUri}">
			</head>

			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root"></div>
				
				<script src="${scriptUri}"></script>
			</body>
			</html>`;
  }
}

export default MomentumPanel;
