// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/preline/preline.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        // フォントを変える場合は修正（リンクも修正）
        custom: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#2988D5',
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3': {
              marginTop: '2.25em !important'
            },
            h1: {
              fontSize: '1.5rem',
            },
            h2: {
              fontSize: '1.3rem',
            },
            h3: {
              fontSize: '1.2rem',
            },
            'p, ul, ol, table, code, pre': {
              fontSize: '1rem',
            },
          }
        }
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
  ],
}