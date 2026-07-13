/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0f1115',
          surface: '#161920',
          surface2: '#1c1f28',
          border: '#262b35',
          text: '#eef0f3',
          muted: '#9199a6',
          dim: '#5b6270',
        },
        accent: '#e8a33d',
        status: '#4fd1c5',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}