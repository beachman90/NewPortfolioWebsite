/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        secondary: {
          light: '#10B981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        background: {
          light: '#F3F4F6',
          DEFAULT: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          light: '#4B5563',
          DEFAULT: '#1F2937',
          dark: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
}