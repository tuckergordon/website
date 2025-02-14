---
title: Creating a standalone web application
description: How to deploy a web application as an HTML file.
date: '2023-07-19'
published: true
---

One of the first questions to answer when building a web application for a client is "where will it
be deployed?". While the list of hosting providers continues to grow, occasionally I have run into
situations where the client needs an application that they can run on their desktop. Recently, I
faced the following set of constraints:

- Needs a Single-Page Application (SPA)
- Must be able to run locally (without an internet connection)
- Cannot execute custom executables
- Cannot execute bash scripts like `.sh`

That really narrowed down my options quickly... can't deploy online, can't create an
[Electron](TODO:) executable for them to run, and can't even create a script to spin up a local
server. I _could_ give users step-by-step instructions on how to open the command line in a given
folder and a start a simple web server, but that's adding too many steps for them to run.

So to get around all of those constraints, I decided to just give them a folder containing the built
application as an `index.html` file and all of its supporting files (`.js`, `.css`, assets, etc).
Then, they could just double-click `index.html` and open the application in the browser. It should
function as expected via the (`file://` protocol)[TODO:].

This approach looks a little different in each of the modern frameworks, so below I've outlined the
steps to take in each of them. But first, some caveats:

## Caveats

- Routing will not work, so keep your application to a single page (TODO:)
- Any custom fonts need to be included in the output directory. I recommend loading your fonts with
  [fontsource](TODO:) which will do this automatically.

## Frameworks

### Nextjs

Shoutout to Next, who make this process easy via their [`export`](TODO:) configuration.

1. Create a new Nextjs application

```bash
npx create-next-app@latest
```

2. Add the following to your next config:

```js
// next.config.js

const nextConfig = {
  // ...
  output: 'export',
  assetPrefix: './',
  // ...
};
```

3. Make sure you don't have any imports with `/` in your code. As of writing, the default app
   includes imports like `/vercel.svg`, which will need to be changed to `./vercel.svg`
4. Run `npm run build`

The `out/` directory will contain a standalone application that can be run by double-clicking the
`index.html` file.

### SvelteKit

<!-- TODO: -->

### Angular

Angular is a bit trickier because the `index.html` file imports scripts using `type=module`, which
is [not supported](TODO:) when running applications via the `file://` protocol.

1. Create a new Angular application

```bash
npm init @angular angular myApp
```

2. In `index.html`, change `href` to `./`

```html
<!-- index.html -->
<base href="./" />
```

3. Run `npm run build` (or `ng build`, if you have Angular CLI installed)
4. Open up `dist/index.html` and remove all instances of `type=module`

#### Automating with a script

It's a little tedious to have to scrub the `dist/index.html` file after every build. So instead, we
can create a script to do it for us:

```js
// scripts/build-standalone.js

const fs = require('fs');
const jsdom = require('jsdom');
const path = require('path');

const { JSDOM } = jsdom;

var argv = require('minimist')(process.argv.slice(2));

// Normalize so that this can be run on any OS
const distPath = path.normalize('./dist/standalone');
const indexPath = argv._.at(0) ?? path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Invalid file path:', indexPath);
}

const dom = await JSDOM.fromFile(indexPath);

// Remove `type="module"` from all of the scripts
dom.window.document.querySelectorAll('script').forEach((script) => {
  script.removeAttribute('type');
});

// Write a new index.html file in place of the old one
fs.writeFileSync(
  indexPath,
  '<!DOCTYPE html>' + dom.window.document.documentElement.outerHTML,
  function (error) {
    if (error) throw error;
  }
);
```

To use this script, add a new command to `package.json`:

```json
{
  "scripts": {
    "build": "ng build",
    "build:standalone": "npm run build -- --output-path=dist/standalone && node ./scripts/build-standalone.js"
  }
}
```

Then you can simply run `npm run build:standalone`. The `dist/standalone/` directory will contain a
standalone application that can be run by double-clicking the `index.html` file.

### Vue

<!-- TODO: -->
