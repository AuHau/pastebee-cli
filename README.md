# PasteBee CLI

[![](https://img.shields.io/badge/made%20by-Swarm-blue.svg?style=flat-square)](https://ethswarm.org/)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![](https://img.shields.io/badge/npm-%3E%3D6.0.0-orange.svg?style=flat-square)
![](https://img.shields.io/badge/Node.js-%3E%3D12.0.0-orange.svg?style=flat-square)

> Simple CLI tool to pipe text/logs to Swarm network

This project is intended to be used with **Bee version 1.2.0**. Using it with older or newer Bee versions is not recommended and may not work.

**This package currently works out of box, but might break in future as it depends on some specific behaviour of other components and projects. If you notice that it is broken please create issue, or better PR.**

It is a bit of a hack project, so there might be a problems, please let me know if you have some problems.

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Maintainers](#maintainers)
* [License](#license)


## Installation

To use `pastebee-cli` across your whole system, it is recommended to install it globally:

```sh
npm install --global pastebee-cli
```

## Usage

`pastebee-cli` takes input from STDIN, so pipe in whatever you feel like it! (it has to be a text though):

```shell
$ echo "Hello World Swarm" | pastebee
✔ Uploaded! https://pastebee.bzz.link/?34848f873ae2cc740957d45ad890e9f3bd18ad60e91b58cdf7c90b9f1f6c00b6

// Send somebody link to your logs
$ some-cool-command | pastebee --silence | mail -s "Check out my logs" somebody@example.com
```

```
Usage: <some STDOUT producing command> | pastebee [options]

Options:
      --version  Show version number                                   [boolean]
  -b, --bee      Bee node URL. By default Gateway is used.              [string]
  -p, --stamp    Postage Batch Stamp ID. Required if custom Bee node is used.
                                                                        [string]
  -n, --name     Name of the file that is stored in metadata.           [string]
  -a, --hash     Displays only the reference not as URL.               [boolean]
  -s, --silence  Output only the uploaded reference without any UX.    [boolean]
  -h, --help     Show help                                             [boolean]

pastebee-cli is a simple tool for piping text to Swarm network.

If you want to know more about Swarm network visit https://ethswarm.org/
```


### Environmental variables

You can configure the Bee node setting using environmental variables:

 - `BEE_URL` - A URL to your Bee node
 - `BEE_STAMP` - A Postage Stamp Batch ID to be used when uploaded. Required if you are using custom Bee node.

# Contribute

This is simple hack project to demonstrate Swarm network and simplify common task. Feel free to create a PR with new features or bug fixes! 

# Maintainers

- [AuHau](https://github.com/AuHau)

See what "Maintainer" means [here](https://github.com/ethersphere/repo-maintainer).

# License

[MIT](./LICENSE)
