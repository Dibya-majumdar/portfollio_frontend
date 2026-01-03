/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "450px", // 👈 your custom breakpoint
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}



