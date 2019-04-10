const vscode = require("vscode");

const helpers = require("./helpers");

class InterpolationError extends Error { }

function interpolate(template) {
    return template
        .replace("{base}", helpers.getSetting("baseCommand"))
        .replace("{fileName}", helpers.getActiveFile())
        .replace("{testName}", findClosestTest())
        .replace("{line}", getActiveLine());
}

function findClosestTest() {
    let lineNumber = getActiveLine();

    while (lineNumber >= 0) {
        const line = vscode.window.activeTextEditor.document.lineAt(lineNumber).text;
        const match = line.match(helpers.getSetting("runOnCursorRegex"));
        if (match) return match[1];

        lineNumber--;
    }

    throw new InterpolationError("No test detected!");
}

function getActiveLine() {
    return vscode.window.activeTextEditor.selection.active.line;
}

module.exports = { interpolate, InterpolationError };