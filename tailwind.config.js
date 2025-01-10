/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',    // iPhone and small mobile devices
        'md': '768px',    // Tablets
        'lg': '1366px',   // Laptops
        'xl': '1920px',   // Large desktops
      },
    },
  },
  plugins: [],
}