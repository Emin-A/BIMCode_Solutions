/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8fb",
          100: "#e7eef7",
          200: "#c9daed",
          300: "#a0bddc",
          400: "#6894c5",
          500: "#3f6fae",
          600: "#295497",
          700: "#23467c",
          800: "#1f3b66",
          900: "#1b3254",
          950: "#101d33",
        },
      },
    },
  },
  plugins: [],
};
