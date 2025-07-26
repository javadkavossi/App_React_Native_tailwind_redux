/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#0095F6',
        secondary: '#262626',
        background: '#FAFAFA',
        surface: '#FFFFFF',
        error: '#ED4956',
        success: '#2ECC71',
        warning: '#F39C12',
        text: {
          primary: '#262626',
          secondary: '#8E8E93',
          disabled: '#C7C7CC'
        }
      },
      fontFamily: {
        'sans': ['System', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

