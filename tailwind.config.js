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
        // フォントを変える場合は修正（layoutsのリンクも修正）
        custom: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}