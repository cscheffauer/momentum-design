# Momentum VS Code Extension

## Debugging

1. Add a Debug profile in your VS Code (launch.json), like so (make sure the paths are correct):

```json
{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Momentum VS Code Extension Tests",
        "type": "extensionHost",
        "request": "launch",
        "runtimeExecutable": "${execPath}",
        "args": [
          "--extensionDevelopmentPath=${workspaceFolder}/momentum-design/packages/@momentum-design/vscode-extension",
        ],
        "outFiles": ["${workspaceFolder}/momentum-design/packages/@momentum-design/vscode-extension/out/*.js"]
      }
    ]
  }
```

2. Go to the extension.ts file and press F5 to start debugging.
3. A new VS Code window should open, with the Extension enabled
