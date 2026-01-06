


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "450px", // ✅ custom breakpoint preserved
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
