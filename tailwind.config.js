/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09261E",
        'primary-light': "#135341",
        wine: "#803344",
        silver: "#D8D8D8",
        offwhite: "#F5F5F5",
        charcoal: "#1C1C1C"
      }
    }
  },
  plugins: []
};
