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
  plugins: [
    require('preline/plugin'),
  ],
}