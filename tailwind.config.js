/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "header-red": "#ef233c",
      "footer-light": "#e9ecef",
      "footer-dark": "#1C2541",
      "grid-light": "#FFFFFF",
      "grid-light-hover": "#F0F0F0",
      "grid-dark": "#1C2541",
      "grid-dark-hover": "#3A506B",
      "retire-red": "#ef233c",
      "retire-hover": "#d90429",
      "border-light": "#e5e7eb",
      "border-dark": "#000000",
    }
  },
  plugins: [],
}

