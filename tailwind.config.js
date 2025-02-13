/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          'main-bg': '#f0f2f5',
          'display-bg': '#ffffff',
          'button-backside': '#d0d3d9',
          'calculator-border': '#bdc1c6',
        },

        dark: {
          'main-bg': '#202124',
          'display-bg': '#2d2e33',
          'button-backside': '#282a2d',
          'calculator-border': '#3c4043',
        }
      }
    },
  },
  plugins: [],
}

