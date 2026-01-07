/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const mode = "jit";
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
      offWhite: "rgb(var(--color-offWhite) / <alpha-value>)",
      darkBlue: "rgb(var(--color-darkBlue) / <alpha-value>)",
      link: "rgb(var(--color-link) / <alpha-value>)",
      "black-100": "rgb(var(--color-black-100) / <alpha-value>)",
      "black-200": "rgb(var(--color-black-200) / <alpha-value>)",
      "white-100": "rgb(var(--color-white-100) / <alpha-value>)",
      "github-purple": "#ff60f2",
      "github-green": "#36d254",
      "github-yellow": "#e3b341",
      "github-pink": {
        DEFAULT: "#DB61A2",
        500: "#ffb3e6",
      },
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color)",
      DEFAULT: "0 2px 4px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "text-shadow": (value) => ({
          textShadow: value,
        }),
      },
      { values: theme("textShadow") },
    );
  }),
];
