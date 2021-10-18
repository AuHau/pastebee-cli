# PasteBee CLI

![Node.js tests](https://github.com/ethersphere/swarm-cli/workflows/Node.js%20tests/badge.svg?branch=master)
[![](https://img.shields.io/badge/made%20by-Swarm-blue.svg?style=flat-square)](https://swarm.ethereum.org/)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![](https://img.shields.io/badge/npm-%3E%3D6.0.0-orange.svg?style=flat-square)
![](https://img.shields.io/badge/Node.js-%3E%3D12.0.0-orange.svg?style=flat-square)

This project is intended to be used with **Bee version 1.2.0**. Using it with older or newer Bee versions is not recommended and may not work.

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Maintainers](#maintainers)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Description

> Manage your Bee node and interact with the Swarm network via the CLI

The goal of this project is to handle most of the Swarm operations through CLI at some point in the future.

For the currently supported operations, see the [Commands](#commands) section.

## Installation

### From npm

To install globally (requires `npm root --global` to be writable):

```sh
npm install --global @ethersphere/swarm-cli
```

To install locally:

```sh
cd [some directory for nodejs files]
npm install @ethersphere/swarm-cli
./node_modules/.bin/swarm-cli --help
```

## Usage

## Configuration

The configuration file is placed in a hidden folder named `swarm-cli`.

In case of Unix-based systems this config path will be: `$HOME/.swarm-cli`

On Windows systems: `$HOME\AppData\swarm-cli`

The configuration file is saved with `600` file permission.

On first run, this configuration will be generated with default values, that you are able to change on your demand under the before mentioned path.

### System environment

With specific system environment variables you can alter the behaviour of the CLI

* `BEE_API_URL` - API URL of Bee client
* `BEE_DEBUG_API_URL` - Debug API URL of Bee client
* `SWARM_CLI_CONFIG_FOLDER` - full path to a configuration folder
* `SWARM_CLI_CONFIG_FILE` - configuration file name, defaults to config.json

# Contribute

There are some ways you can make this module better:

- Consult our [open issues](https://github.com/ethersphere/swarm-cli/issues) and take on one of them
- Help our tests reach 100% coverage!

# Maintainers

- [AuHau](https://github.com/AuHau)

See what "Maintainer" means [here](https://github.com/ethersphere/repo-maintainer).

# License

[MIT](./LICENSE)
