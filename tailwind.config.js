/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-color": "#22c55e",
      },
    },
    fontFamily: {
      slabo: "Slabo 13px",
      mont: "Montserrat",
    },
  },
  plugins: [],
};

