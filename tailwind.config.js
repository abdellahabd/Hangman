/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "Keybord-grid": "repeat(auto-fit, minmax(75px, 1fr))",
      },
    },
  },
  plugins: [],
};
