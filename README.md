### Hexlet tests and linter status:
[![Actions Status](https://github.com/EmeraldBoar/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/EmeraldBoar/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e4f5d57c4ff1f10d9f28/maintainability)](https://codeclimate.com/github/EmeraldBoar/frontend-project-lvl2/maintainability)

# Difference calculator

Difference calculator - a program that determines the difference between two data structures
## Utility features:
- Support for different input formats: yaml, json
- Generating a report in plain text, stylish and json format

## Usage example:
```sh
# plain format
$ gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# stylish format
$ gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

## Installation

Install the latest [Node.js](https://nodejs.org/) to the system globally.

To install a package on a system as a utility:
- Open your terminal.
- Go to project directory.
- Run command:
```sh
$ npm link
```

You can install this library as a dependency in any other NPM package:

```sh
    import genDiff from '@hexlet/code';
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
```