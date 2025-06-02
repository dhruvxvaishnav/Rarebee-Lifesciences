/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        rarebee: {
          bg: "#F8FAFC",
          primary: "#D9EAFD",
          secondary: "#BCCCDC",
          text: "#9AA6B2",
        },
      },
    },
  },
  plugins: [],
};
