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
      // メタタグ
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'SQL,SQL研修サービス,ChatGPT,生成AI,データ分析内製化,研修,法人向け,勉強会,データ分析,データサイエンティスト,データアナリスト,データエンジニア,マーケター,営業,ビジネスパーソン',
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
          content: `https://sql-everyone.vercel.app/ogimage.jpeg`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'データ分析内製化に向けた人材育成サービス『SQL Everyone』',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://sql-everyone.vercel.app/',
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
      link: [
        // ファビコンの設定
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // PNG形式のファビコンを使用する場合
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/sql_icon.png' },
      ],
    },
  },
})
