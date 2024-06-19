/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
export const content = ['./src/**/*.{js,jsx}'];
export const mode = 'jit';
export const theme = {
  extend: {
    colors: {
      primary: '#1D5D9B',
      secondary: '#add8e6',
      tertiary: '#F4D160',
      offWhite: '#d0d5dd',
      darkBlue: '#161f2c',
      'black-100': '#100d25',
      'black-200': '#090325',
      'white-100': '#f3f3f3',
      'github-purple': '#ff60f2',
      'github-green': '#36d254',
      'github-yellow': '#e3b341',
    },
    boxShadow: {
      card: '0px 35px 120px -15px #211e35',
    },
    screens: {
      xs: '450px',
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    );
  }),
];
