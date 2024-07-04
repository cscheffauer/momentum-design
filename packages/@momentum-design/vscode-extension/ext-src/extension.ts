// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import MomentumPanel from "./panel";
import Credentials from "./credentials";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  const credentials = new Credentials();
  await credentials.initialize(context);

  const octokit = await credentials.getOctokit();
  const userInfo = await octokit.users.getAuthenticated();

  vscode.window.showInformationMessage(
    `Momentum Design Extension: Logged into GitHub as ${userInfo.data.login}`
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("momentum.start", async () => {
      // Create and show a new webview
      MomentumPanel.createOrShow(context.extensionUri, octokit);
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
