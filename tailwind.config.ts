import { tuckerTheme } from './src/styles/theme';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
  plugins: [typography],
} satisfies Config;
