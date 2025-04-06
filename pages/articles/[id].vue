<template>
  <!-- Blog Article -->
  <div>
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl">
      <!-- Content -->
      <div class="space-y-5 md:space-y-8">
        <!-- <div> -->
        <figure>
          <img
            class="w-full object-cover rounded-xl"
            :src="data?.eyecatch?.url"
            :width="data?.eyecatch?.width"
            :height="data?.eyecatch?.height"
            alt=""
          />
        </figure>

        <h1
          class="font-bold text-xl lg:text-3xl text-gray-800 dark:text-neutral-200 mb-10 mt-10"
        >
          {{ data?.title }}
        </h1>

        <div class="flex items-center justify-between mb-4">
          <!-- 左側: カテゴリ -->
          <div v-if="data?.category?.length">
            <span
              v-for="cat in data.category"
              :key="cat.id"
              class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              {{ cat.name }}
            </span>
          </div>

          <!-- 右側: 日付 -->
          <div
            class="shrink-0 text-sm text-gray-600 dark:text-neutral-400 text-right"
          >
            <div>
              {{ dateFormat(data?.publishedAt) }}
            </div>
          </div>
        </div>

        <div
          v-html="data?.content"
          class="text-lg text-gray-800 dark:text-neutral-200 space-y-6 prose"
        ></div>

        <!-- SNSシェアボタンを追加 -->
        <div class="flex items-center gap-4 mt-2 pt-4 pb-4">
          <!-- リンクをコピー -->
          <a
            href=""
            class="inline-flex items-center text-gray-600 dark:text-neutral-400 hover:text-blue-500"
            title="リンクをコピー"
            @click.prevent="copyUrl"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </svg>
          </a>

          <!-- X(旧Twitter)でシェア -->
          <a
            href=""
            class="inline-flex items-center text-gray-600 dark:text-neutral-400 hover:text-blue-500"
            title="Xでシェア"
            @click.prevent="shareOnX"
          >
            <!-- 簡易的に X アイコン -->
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
              />
            </svg>
          </a>

          <!-- はてなブックマークでシェア -->
          <a
            href=""
            class="inline-flex items-center text-gray-600 dark:text-neutral-400 hover:text-blue-500"
            title="はてブでシェア"
            @click.prevent="shareHatena"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14.941406 16 L 14.941406 34 L 23.984375 34 C 26.754375 34 29 31.800891 29 29.087891 C 29.001 26.660891 27.202844 24.648 24.839844 24.25 C 26.761844 23.721 28.167969 22.131516 28.167969 20.228516 C 28.167969 17.893516 26.067609 16 23.474609 16 L 14.941406 16 z M 30.9375 16 L 30.9375 28 L 35 28 L 35 16 L 30.9375 16 z M 19.207031 19.947266 L 21.818359 19.947266 C 22.768359 20.045266 23.509766 20.814719 23.509766 21.761719 C 23.509766 22.774719 22.663141 23.595703 21.619141 23.595703 L 19.207031 23.595703 L 19.207031 19.947266 z M 19.207031 26.800781 L 22.207031 26.800781 C 23.345031 26.800781 24.269531 27.701641 24.269531 28.806641 C 24.269531 29.911641 23.346031 30.808594 22.207031 30.808594 L 19.207031 30.808594 L 19.207031 26.800781 z M 32.96875 30 A 2.0309999 2 0 0 0 30.9375 32 A 2.0309999 2 0 0 0 32.96875 34 A 2.0309999 2 0 0 0 35 32 A 2.0309999 2 0 0 0 32.96875 30 z"
              ></path>
            </svg>
          </a>

          <!-- Facebookでシェア -->
          <a
            href=""
            class="inline-flex items-center text-gray-600 dark:text-neutral-400 hover:text-blue-500"
            title="Facebookでシェア"
            @click.prevent="shareFacebook"
          >
            <!-- Facebookアイコンの簡易SVG例 -->
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <!-- LINEでシェア -->
          <a
            href=""
            class="inline-flex items-center text-gray-600 dark:text-neutral-400 hover:text-blue-500"
            title="LINEでシェア"
            @click.prevent="shareLine"
          >
            <!-- LINEアイコンの簡易SVG例 -->
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"
              ></path>
            </svg>
          </a>
        </div>
        <!-- SNSシェアボタン -->

        <div class="border-t border-gray-200 my-4"></div>

        <!-- Card Section -->
        <div class="max-w-5xl px-4 py-4 sm:px-6 lg:px-4 lg:py-4 mx-auto">
          <!-- Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6">
            <!-- Card -->
            <NuxtLink
              class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
              to="/articles"
            >
              <div class="p-4 md:p-5">
                <div class="flex gap-x-5">
                  <svg
                    class="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4.996 2a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div class="grow">
                    <p
                      class="group-hover:text-blue-600 text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200"
                    >
                      記事一覧に戻る
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
            <!-- End Card -->

            <!-- Card -->
            <NuxtLink
              class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
              to="/seminar"
            >
              <div class="p-4 md:p-5">
                <div class="flex gap-x-5">
                  <svg
                    class="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 10c0-.55228-.4477-1-1-1h-3v2h3c.5523 0 1-.4477 1-1Z"
                    />
                    <path
                      d="M13 15v-2h2c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3h-2.256c.1658-.46917.256-.97405.256-1.5 0-.51464-.0864-1.0091-.2454-1.46967C12.8331 4.01052 12.9153 4 13 4h7c.5523 0 1 .44772 1 1v9c0 .5523-.4477 1-1 1h-2.5l1.9231 4.6154c.2124.5098-.0287 1.0953-.5385 1.3077-.5098.2124-1.0953-.0287-1.3077-.5385L15.75 16l-1.827 4.3846c-.1825.438-.6403.6776-1.0889.6018.1075-.3089.1659-.6408.1659-.9864v-2.6002L14 15h-1ZM6 5.5C6 4.11929 7.11929 3 8.5 3S11 4.11929 11 5.5 9.88071 8 8.5 8 6 6.88071 6 5.5Z"
                    />
                    <path
                      d="M15 11h-4v9c0 .5523-.4477 1-1 1-.55228 0-1-.4477-1-1v-4H8v4c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6973l-1.16797 1.752c-.30635.4595-.92722.5837-1.38675.2773-.45952-.3063-.5837-.9272-.27735-1.3867l2.99228-4.48843c.09402-.14507.2246-.26423.37869-.34445.11427-.05949.24148-.09755.3763-.10887.03364-.00289.06747-.00408.10134-.00355H15c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1Z"
                    />
                  </svg>

                  <div class="grow">
                    <p
                      class="group-hover:text-blue-600 text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200"
                    >
                      セミナー・勉強会に戻る
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
            <!-- End Card -->
          </div>
          <!-- End Grid -->
        </div>
        <!-- End Card Section -->

        <transition name="fade">
          <div
            v-if="showCopiedPopup"
            class="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-gray-800 text-white rounded shadow whitespace-nowrap"
          >
            リンクをコピーしました
          </div>
        </transition>
      </div>
      <!-- End Content -->
    </div>
  </div>
          <ArticlesFooter />
          <ArticlesBook />
  </div>
  <!-- End Blog Article -->
</template>

<script setup lang="ts">
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk"
import { ref } from "vue"
import bookImage from "~/assets/images/book.jpg"
import { createError } from "#app"

const { params } = useRoute()

export type Blog = {
  title?: string
  content?: string
  eyecatch?: MicroCMSImage
}

const { data, error } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
})
// SSGの場合
// if (error.value) {
//   if (error.value.statusCode === 404) {
//     throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
//   }
// }
// データが存在しない場合、404エラーを投げる
// nuxt buildの時はこれがあるとリロードで404になってしまう
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}

const showCopiedPopup = ref(false)

function copyUrl() {
  const url = window.location.href
  navigator.clipboard
    .writeText(url)
    .then(() => {
      // ポップアップを表示
      showCopiedPopup.value = true

      // 2秒後に非表示
      setTimeout(() => {
        showCopiedPopup.value = false
      }, 2000)
    })
    .catch((err) => {
      // エラー
    })
}

function shareOnX() {
  const pageUrl = window.location.href
  const text = data.value.title

  // X(旧Twitter)のシェアIntentを開く
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    pageUrl
  )}&text=${encodeURIComponent(text)}`

  // 新しいタブで開く
  window.open(shareUrl, "_blank")
}

function shareHatena() {
  // 今のページURLを取得
  const pageUrl = window.location.href

  // はてなブックマークのエントリページを開く
  const shareUrl = `https://b.hatena.ne.jp/entry?url=${encodeURIComponent(
    pageUrl
  )}`

  // 新しいタブで開く
  window.open(shareUrl, "_blank")
}

function shareFacebook() {
  // 今のページURLを取得
  const pageUrl = window.location.href

  // Facebookのシェアページを開くURL
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    pageUrl
  )}`

  // 新しいタブで開く
  window.open(shareUrl, "_blank")
}

function shareLine() {
  // 今のページURLを取得
  const pageUrl = window.location.href

  // LINEでシェア
  const shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    pageUrl
  )}`

  // 新しいタブで開く
  window.open(shareUrl, "_blank")
}

const title = data.value?.title
const description = data.value?.meta.description
const keywords = data.value?.meta.keywords
const url = `https://sql-everyone.com/articles/${params.id}`
const img = data.value?.eyecatch.url
useHead({
  title: title,
  link: [
    { rel: 'canonical', href: url },
  ],
  // メタタグ
  meta: [
    {
      hid: "description",
      name: "description",
      content: description,
    },
    {
      hid: "keywords",
      name: "keywords",
      content: keywords,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: title,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: url,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: img,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "article",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: img,
    },
    {
      name: "application-name",
      content: title,
    },
    {
      name: "apple-mobile-web-app-title",
      content: title,
    },
  ],
  // 埋め込み記事の読み込みに必要
  script: [{ src: "//cdn.iframe.ly/embed.js", async: true }],
})
</script>