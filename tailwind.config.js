/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Tahoma", "Sans-serif"],
      },
      colors: {
        "brand-orange": "#FC0",
        "brand-yellow": "#FFD000",
        "primary-blue": "#14377D",
        "primary-green": "#6bb54a",
        "dark-blue": "#052667",
        "dark-green": "#559538",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        base: "0.2rem",
        default: "0.3rem",
        input: "0.5rem",
        md: "0.75rem",
        lg: "1.2rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
