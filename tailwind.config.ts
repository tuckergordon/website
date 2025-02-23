import { tuckerTheme } from './src/styles/theme';
import { skeleton } from '@skeletonlabs/tw-plugin';
import typography from '@tailwindcss/typography';
import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Remove the backticks that tailwind adds around inline <code> elements
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
    skeleton({
      themes: {
        custom: [tuckerTheme],
      },
    }),
  ],
} satisfies Config;
