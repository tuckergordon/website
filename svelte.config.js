import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import remarkToc from 'remark-toc';
import { createHighlighter } from 'shiki';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await createHighlighter({
        langs: [
          'css',
          'js',
          'json',
          'jsx',
          'html',
          'shell',
          'svelte',
          'sass',
          'scss',
          'text',
          'ts',
          'tsx',
          'zsh',
        ],
        themes: ['one-dark-pro'],
      });
      await highlighter.loadLanguage('javascript');
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'one-dark-pro' }));
      return `{@html \`${html}\` }`;
    },
  },
  // TODO:
  // layout: {
  // 	_: './src/mdsvex.svelte'
  // },
  remarkPlugins: [[remarkToc, { tight: true }]],
  rehypePlugins: [rehypeSlug, rehypeUnwrapImages],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({}), mdsvex(mdsvexOptions), importAssets()],
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
