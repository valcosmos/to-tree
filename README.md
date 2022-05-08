## Introduction

- A tool for converting flattened array into tree.
- I made this by **TypeScript**.
- If you like it, you can give a star on github
- If you get some issues, welcome to submit issues on github.

## Installation

use npm:

```sh
npm i toTree
```

use yarn:

```sh
yarn add toTree
```

use pnpm:

```sh
pnpm add toTree
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

import { toTree } from 'toTree'

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
import { toTree } from 'toTree'

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

