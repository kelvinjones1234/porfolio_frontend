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
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        babas: ["Bebas Neue", "sans-serif"],
        sans: ['Inter var', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],

      },
    },
  },
  plugins: [],
}