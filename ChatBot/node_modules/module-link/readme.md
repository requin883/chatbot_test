# npm link file

### Install

```
npm install npm-link-file --save-dev
```

## Usage

```
npm-link-file ./lib/path/file.js file-library
```

### How

Here's the rundown, when you run command above the following happens.

1. create directory `node_modules_linked`
1. create direcotry `node_modules_linked/<name>`
1. create `package.json` with name and main
1. simlink `<file>` to `node_modules_linked/<name>/index.js`
1. simlink `node_modules_linked/<name>` to `node_modules/<name>`

### Why?

Have you ever wanted to require a file absolutely as a module?

```
var fileLibrary = require("file-library")
```

Instead of relatively like this.

```
var fileLibrary = require("./lib/path/file.js")
```
