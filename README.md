# Tucker Gordon's Website

My personal website! Featuring an about me page and a blog. Written with SvelteKit.

## Developing

Once you've installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

You can also use `npm` instead if you don't have `pnpm` installed.

## Building

To build for production:

```bash
pnpm build
```

Preview the production build with `pnpm preview`.

## Code quality

This project contains several checks to maintain high code quality. These include typechecking,
linting, autoformatting, and more.

To run all checks:

```bash
pnpm check
```

Or checks can be run individually:

- Prettier: `pnpm check:format`
- ESLint: `pnpm check:format`
- Svelte (includes typechecking): `pnpm check:svelte`
- Vitest: `pnpm test:unit`
- Playwright: `pnpm test:e2e`
