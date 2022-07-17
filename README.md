<h1 align="center">@valcosmos/to-tree</h1>

<div align="center">

  <img src="https://img.shields.io/badge/build-passing-informational?style=for-the-badge&logo=GitHub&color=181717" />

  <img src="https://img.shields.io/badge/Node.js-v16.15.0-informational?style=for-the-badge&logo=Node.js&color=339933" />

  <img src="https://img.shields.io/badge/TypeScript-v4.6.4-informational?style=for-the-badge&logo=TypeScript&color=3178C6" />

  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" />
  
</div>

## Introduction

- A tool for converting **flattened array** into **tree**.
- I made this by **TypeScript**.
- If you like it, you can give a star on github
- If you get some issues, welcome to submit issues on github.

## Installation

use npm:

```sh
npm i @valcosmos/to-tree
```

use yarn:

```sh
yarn add @valcosmos/to-tree
```

use pnpm:

```sh
pnpm add @valcosmos/to-tree
```

## Usage

```ts
/**
 *
 * @param data ==>[required]  the data what you want to converted to tree
 * @param key ==>[optional]  the unique key in the data
 * @param parentKey ==>[optional]  the unique key of the parent node in the data
 * @returns
 */

import { toTree } from '@valcosmos/to-tree'

const arr = [
  { id: 1, title: '1', pid: 0 },
  { id: 2, title: '2', pid: 1 },
  { id: 3, title: '3', pid: 2 }
]

// use it to convert, and you will get what you want
const res = toTree(arr)
```

Maybe you don't have field for **id** and **pid** in your data. And this time you can **reset the fields** you want.

You just need to pass two parameters in the **toTree**.

```ts
import { toTree } from '@valcosmos/to-tree'

const arr = [
  { _id: 1, title: '1', parentId: 0 },
  { _id: 2, title: '2', parentId: 1 },
  { _id: 3, title: '3', parentId: 2 }
]

// use it to convert, and you will get what you want
const res = toTree(arr, '_id', 'parentId')
```

## Development
use gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://valcosmos-totree-x8k0k0b3u6k.ws-us44.gitpod.io)

clone locally:

```sh
git clone https://github.com/valcosmos/toTree.git

cd toTree

yarn

yarn test
```

