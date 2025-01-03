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
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/sql_icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
        },
      ],
      // メタタグ
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'SQL,SQL研修,SQL研修サービス,ChatGPT,生成AI,データ分析内製化,研修,法人向け,勉強会,データ分析,データサイエンティスト,データアナリスト,データエンジニア,マーケター,営業,ビジネスパーソン',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '『SQL Everyone』はデータ分析内製化に向けた人材育成サービスです。目的・レベルに合わせたSQL分析人材を育成することでデータ分析内製化を支援します。SQLを全く知らない人が受けてもデータ分析で使えるSQLが学べるように、『集合研修プラン』と『マンツーマントレーニングプラン』の2つのサービスを提供しています。',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://sql-everyone.com/ogimage.png`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'データ分析内製化に向けた人材育成サービス『SQL Everyone』',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://sql-everyone.com/',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '『SQL Everyone』はデータ分析内製化に向けた人材育成サービスです。目的・レベルに合わせたSQL分析人材を育成することでデータ分析内製化を支援します。SQLを全く知らない人が受けてもデータ分析で使えるSQLが学べるように、『集合研修プラン』と『マンツーマントレーニングプラン』の2つのサービスを提供しています。',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'application-name',
          content: 'データ分析内製化に向けた人材育成サービス『SQL Everyone』',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'データ分析内製化に向けた人材育成サービス『SQL Everyone』',
        },
      ],
    },
  },

  modules: ['nuxt-gtag', '@nuxtjs/sitemap'],

  gtag: {
    // VercelのProduction,Preview環境のNODE_ENVはproduction
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-R9JV7VBMYE'
  }
})