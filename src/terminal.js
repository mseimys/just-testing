const vscode = require("vscode");

const TERMINAL_NAME = "Just Testing";

function obtainTerminal() {
    const terminal = vscode.window.terminals.find(terminal => terminal.name == TERMINAL_NAME);
    if (terminal) return terminal;

    return vscode.window.createTerminal(TERMINAL_NAME);
}

module.exports = { obtainTerminal };
