---
title: My Developer Setup
description: A running list of all of the tools and tricks I use as a web developer
date: '2023-07-18'
published: true
---

One of the quirks of spending the past 6 years at one company is that the majority of the coding
that I've done in that time has occured on a company laptop. While this physical separation is great
for work-life balance, it also means that whenever I open my personal computer to write some code,
I'm usually met with a long list of out of date libraries and keyboard shortcuts.

To alleviate this problem, this document is a gift to future me. It's a running list of all the
various tools and tricks I use as a software developer.

**Note that I use a MacBook. Not all of these will work/apply on windows**

## Terminal

Here's how I make the Mac terminal look/work the way I want

- [starship.rs](https://starship.rs/) - all the good stuff with minimal setup
- [One Dark Theme](https://github.com/nathanbuchar/atom-one-dark-terminal) - gotta love it when
  terminal and VSCode match. A nice little addition on top of starship
- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) - a gamechanger. Way
  better than recursive searching.
  - To install:
    - `brew install zsh-autosuggestions``
    - Add `source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh` to `~/.zshrc`

## Environment Management

### conda

I use Anaconda (via [miniconda](https://docs.conda.io/en/latest/miniconda.html)) to handle most of
my global installation needs, including Python and Node.

#### Installing `nodejs` via `conda`

I've become a big proponent of using an environment manager (like conda) to manage node
installation. Ever try to switch to a different version of node? It's a pain. Sure you can use
[n](https://github.com/tj/n) but I think it's much cleaner to let conda do it for you:

- Install globally:

```shell
conda install -c conda-forge nodejs
```

- Or create an environment and install a specific version:

```shell
conda create --name node16
conda activate node16
conda install -c conda-forge nodejs=16.20.1
```

#### Python

I set my default `python.defaultInterpreterPath` to that conda environment's python shell so that
whenever i open a new terminal in vscode, it automatically activates the environment

### pnpm

I started using [pnpm](https://pnpm.io/) instead of the normal `npm` and have been loving it so far.
Dramatically reduced install times makes for a much nicer developer experience.

## VS Code

### Workspaces

VS Code [workspaces](https://code.visualstudio.com/docs/editor/workspaces) are very useful,
especially when you're working in a monorepo with a front-end and back-end that are written in
different languages (e.g. TypeScript vs Python).

I use a
[multi-root workspace](https://code.visualstudio.com/docs/editor/workspaces#_multiroot-workspaces)
where I have both the front-end and the back-end so that they both appear at the top level of
VScode's file explorer and so I can track their git histories separately

### Settings

- [Unicode character highlighting](https://code.visualstudio.com/updates/v1_63#_unicode-highlighting) -
  really helpful when copying and pasting text to make sure unicode characters don't sneak in

### Launching from the command line

I use the `code` command all the time to open files and directories in VS Code. A very easy install
process, just follow
[these steps](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line).

### Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - lint your
  code as you go
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) -
  auto-format your code
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - useful
  visual diagram of your Git tree with lots of functionality for running commands from it
- [mikestead.dotenv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - adds
  support for `.env` syntax
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) -
  highlights anywhere `TODO:` appears in the code
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) -
  highlights colors when they appear in your code
- [Markdown All In One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) -
  a must when writing markdown (like this document!)
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) -
  my theme of choice
- [Vitest](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer) - very
  helpful when writing vitest unit tests
- [MongoDB for VSCode](https://code.visualstudio.com/docs/azure/mongodb) - convenient tool when
  working with MongoDB

Plus the official extensions for any language/framework I'm using (e.g. Svelte, React, Angular,
Python, YAML,)

## Software

- [VS Code](https://code.visualstudio.com/) - hard to imagine life without it at this point
- [Bettersnaptool](https://apps.apple.com/us/app/bettersnaptool/id417375580?mt=12) - one of the only
  apps I have paid actual, personal money for. It's worth the $2.99 to be able to hit
  <kbd>⌘</kbd>-<kbd>⌥</kbd>-<kbd>→</kbd> and have my window snap to the right half of the page.
