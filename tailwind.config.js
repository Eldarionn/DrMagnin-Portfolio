/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1281px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #DFDFDF 0%, #E2E2E2 9.62%, #E8E8E8 18.69%, #F5F5F5 83.71%, #F8F8F8 98.8%)",
      },
      fontFamily: {
        cardo: ["Cardo", "serif"],
        raleway: ["Raleway", "serif"],
      },
    },
  },
  plugins: [],
};
