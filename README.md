# Just Testing

A Visual Studio Code extension for running tests in integrated terminal.

Available commands:

- Run all tests
- Run all tests in file
- Run test on cursor

## Configuration Examples

### Python

#### Poetry

```
"justTesting.baseCommand": "poetry run python -m pytest -v",
```

### `unittest`

```
"justTesting.baseCommand": "python -m unittest",
"justTesting.runOnCursorCommand": "{base} {fileName} -k {testName}"
```

### JavaScript

#### Jest

```
"justTesting.baseCommand": "jest",
"justTesting.runOnCursorRegex": "test\\((.+),",
"justTesting.runOnCursorCommand": "{base} -t {testName}"
```

## Settings Reference

### `justTesting.baseCommand`

Base terminal command.

Default: `"python -m pytest -v"`

### `justTesting.runAllCommand`

Terminal command for "Run all tests"

Default: `"{base}"`

### `justTesting.runFileCommand`

Terminal command for "Run all tests in file"

Default: `"{base} {fileName}"`

### `justTesting.runOnCursorRegex`

Regular expression for matching closest test name

Default: `"def (test_.+)\\("`

### `justTesting.runOnCursorCommand`

Terminal command for "Run test on cursor"

Default: `"{base} {fileName}::{testName}"`
