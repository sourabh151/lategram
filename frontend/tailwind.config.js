/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,js,tsx,jsx,html}','!node_modules'],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary_accent: "var(--primary_accent)",
        primary_text: "var(--primary_text)",
        primary_highlight: "var(--primary_highlight)",
      }
    },
  },
  plugins: [],
}

