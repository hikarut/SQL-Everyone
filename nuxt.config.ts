// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
  app: {
    head: {
      // ページのタイトルやメタタグの設定
      title: 'データ分析内製化に向けた人材育成サービス『SQL Everyone』',
      meta: [
        // メタタグの例
        { name: 'description', content: 'データ分析内製化に向けた人材育成サービス『SQL Everyone』' },
      ],
      link: [
        // ファビコンの設定
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // PNG形式のファビコンを使用する場合
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/sql_icon.png' },
      ],
    },
  },
})
