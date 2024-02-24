/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "grid-light": "#E0E7FA",
        "grid-light-hover": "#B9C3DF",
        "grid-dark": "#1C2541",
        "grid-dark-hover": "#3A506B",
      },
    },
    fontFamily: {
      display: ["Roboto", "Helvetica"],
    },
  },
  plugins: [],
};
