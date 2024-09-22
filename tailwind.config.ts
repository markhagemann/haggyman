import type { Config } from 'tailwindcss';
import borderGradients from 'tailwindcss-border-gradients';
import bulmaModals from 'tailwindcss-bulma-modals';

export default {
  content: [
    './src/css/*.css',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      linearBorderGradients: {
        colors: {
          'blue-dark': ['#12223c', '#0a3557', '#12223c'],
        },
      },
      fontFamily: {
        display: ['Exo'],
        body: ['Exo'],
      },
      colors: {
        blue: {
          transparent: 'rgba(8, 31, 45, 0.5)',
          dark: '#2779bd',
          'dark-border': '#0a3557',
          darker: '#12223c',
          darkest: '#00182c',
          'darker-alt': '#1d345b',
          light: '#6cb2eb',
          lighter: '#bcdefa',
          lightest: '#eff8ff',
          standard: '#3490dc',
        },
        grey: {
          darkest: '#3d4852',
          darker: '#606f7b',
          dark: '#8795a1',
          light: '#dae1e7',
          lighter: '#f1f5f8',
          lightest: '#f8fafc',
          standard: '#b8c2cc',
        },
      },
      margin: {
        75: '18.75rem',
        84: '21rem',
      },
      padding: {
        75: '18.75rem',
        84: '21rem',
      },
    },
  },
  plugins: [bulmaModals(), borderGradients()],
} as Config;
