/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        luxury: ["var(--font-playfair)", "serif"], // keep if needed
        clean: ["var(--font-geist-sans)", "sans-serif"], // body
        mono: ["var(--font-geist-mono)", "monospace"], // code
        italiana: ["var(--font-italiana)", "serif"], // <-- added for your logos
      },
    },
  },
  plugins: [],
};

