{
  "name": "@teremuhamblin/start.npm",
  "version": "1.0.0",
  "description": "Un micro-starter pour initier rapidement un projet Node.js.",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [
    "starter",
    "node",
    "npm",
    "template"
  ],
  "author": "Teremu",
  "license": "MIT",
  "devDependencies": {
    "jest": "^29.7.0"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}

const { add } = require('../index');
const { greet } = require('../index');
const { hello } = require('../index');
