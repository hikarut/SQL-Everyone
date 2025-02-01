// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,

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

  modules: ['nuxt-gtag', '@nuxtjs/sitemap', 'nuxt-microcms-module'],

  gtag: {
    // VercelのProduction,Preview環境のNODE_ENVはproduction。なので別の環境変数を用意
    // enabled: process.env.NODE_ENV === 'production',
    enabled: process.env.GA_ENV === 'production',
    id: 'G-R9JV7VBMYE'
  },

  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },

  nitro: {
    static: true,
    prerender: {
      fallback: "404.html",
      // fallback: true,
      // 静的ファイル化したいページ
      routes: [
        '/articles/seminar-20230724',
        '/articles/seminar-20241218',
      ]
    },
  },
})