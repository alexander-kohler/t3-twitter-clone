/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chirp: {
          sky: "#C0DEED",
          page: "#E8F4F8",
          blue: "#55ACEE",
          "blue-deep": "#3B94D9",
          ink: "#292F33",
          muted: "#8899A6",
          line: "#CCD6DD",
          panel: "#F5F8FA",
        },
      },
      fontFamily: {
        chirp: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

module.exports = config;
