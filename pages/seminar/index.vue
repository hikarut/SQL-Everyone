<template>
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h1
      class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-10"
    >
      セミナー・勉強会
    </h1>

    <p class="mb-8 mt-8 text-center text-gray-800">
      ビジネスパーソン向けにデータ分析で活用するSQLに関する勉強会を実施しています。
    </p>
    <!-- Grid -->
    <div class="grid lg:grid-cols-2 gap-6">
      <!-- Card -->
      <a
        class="group relative block rounded-xl focus:outline-none"
        href="https://techplay.jp/community/sql-study"
        target="_blank"
      >
        <div
          class="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70"
        >
          <img
            class="size-full absolute top-0 start-0 object-cover"
            src="https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG_omiYkNVym1Sd6g5T38MuTBDc4e9p3cTQ3M1cJm6kfT5x9wSY31oAuyq8_YKV-RDLQYdm3jZCwx9EgZ5sqw3hsHn8LNrFOfIYslZcERy8HfRpXI8zagw7M7s6pqkyURoNtEBa1uLar3vNFb-CCICfGNJ6g6aGJLt-uJqmg_oIyiXcJbmJ-Lw8I6-1T0kYm1euOvQ8cwsFShN4evWz8330YucZcnl9nFAaQx4uB5ICpl/so2YvRDz_400x400.jpg?errorImage=false"
            alt="TECH PLAY"
          />
        </div>

        <div class="absolute top-0 inset-x-0 z-10">
          <div class="p-4 flex flex-col h-full sm:p-6">
            <!-- Avatar -->
            <div class="flex items-center">
              <div class="shrink-0">
                <img
                  class="size-[46px] border-2 border-white rounded-full"
                  src="https://s3.techplay.jp/tp-images/organizer/EDRwJ7ScPyXI1ABEzcGyRHl5Din0NqamzLKx5e7j.jpg?w=160"
                  alt="SQL勉強会"
                />
              </div>
              <div class="ms-2.5 sm:ms-4">
                <h4 class="font-semibold text-white">SQL勉強会</h4>
                <!-- <p class="text-xs text-white/80">Hikaru Takahashi</p> -->
              </div>
            </div>
            <!-- End Avatar -->
          </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 z-10">
          <div class="flex flex-col h-full p-4 sm:p-6">
            <h3
              class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80"
            >
              TECH PLAY
            </h3>
            <p class="mt-2 text-white/80">SQL勉強会</p>
          </div>
        </div>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a
        class="group relative block rounded-xl focus:outline-none"
        href="https://sql.connpass.com/"
        target="_blank"
      >
        <div
          class="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70"
        >
          <img
            class="size-full absolute top-0 start-0 object-cover"
            src="https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG_omiYkNVym1Sd6g5T38MuTBDc4e9p3cTQ3M1cJm6kfTboKsVa7l6r7YlUcSPudYDnhAjPksKURa1l4vFVmmQXx3JUUlmiXMbQdeF7xfsLvkaE4-W9uPEB76D8ZD-3inzHm0UgoDNFTTvrQ9_UlhCJgUOMqiAxtExsUNg6JXOyFfKX2giWbgmzDiA0UpKzeq7fmfwM6mOqs_X_6ATPC85Ic_ylyU5IMcQ4KXoUDxy1St/tIWMSAZF_400x400.png?errorImage=false"
            alt="connpass"
          />
        </div>

        <div class="absolute top-0 inset-x-0 z-10">
          <div class="p-4 flex flex-col h-full sm:p-6">
            <!-- Avatar -->
            <div class="flex items-center">
              <div class="shrink-0">
                <img
                  class="size-[46px] border-2 border-white rounded-full"
                  src="https://s3.techplay.jp/tp-images/organizer/EDRwJ7ScPyXI1ABEzcGyRHl5Din0NqamzLKx5e7j.jpg?w=160"
                  alt="SQL勉強会"
                />
              </div>
              <div class="ms-2.5 sm:ms-4">
                <h4 class="font-semibold text-white">SQL勉強会</h4>
                <!-- <p class="text-xs text-white/80">Hikaru Takahashi</p> -->
              </div>
            </div>
            <!-- End Avatar -->
          </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 z-10">
          <div class="flex flex-col h-full p-4 sm:p-6">
            <h3
              class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80"
            >
              connpass
            </h3>
            <p class="mt-2 text-white/80">SQL勉強会</p>
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Grid -->

    <h2
      class="font-bold text-xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-10 mt-20"
    >
      開催情報
    </h2>
    <ul class="space-y-10">
      <li v-for="blog in blogs?.contents" :key="blog.id">
        <!-- 日付は publishedAt を単純表示 (お好みでフォーマット) -->
        <p class="mb-2 text-gray-500 dark:text-neutral-500">
          {{ dateFormat(blog.publishedAt) }}
        </p>
        <!-- NuxtLinkで個別ページへ飛ぶ想定 -->
        <NuxtLink
          class="text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
          :to="`/articles/${blog.id}`"
        >
          <h5 class="font-medium text-gray-800 dark:text-neutral-200">
            {{ blog.title }}
          </h5>
        </NuxtLink>
      </li>
    </ul>
  </div>
  <!-- End Card Blog -->
</template>

<script setup lang="ts">
import type { MicroCMSImage } from "microcms-js-sdk"

type Blog = {
  title: string;
  eyecatch: MicroCMSImage;
}

const { data: blogs } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: {
    // セミナー情報だけ取得
    filters: "category[contains]seminar", // カテゴリのIDを指定
    fields: [
      "id",
      "title",
      "eyecatch",
      "createdAt",
      "updatedAt",
      "publishedAt",
      "category",
    ],
    orders: "-publishedAt", // 作成日が遅い順に並び替え（降順）
  },
})

const title = 'データ分析内製化に向けた人材育成サービス『SQL Everyone』主催のセミナー'
const description = 'ビジネスパーソン向けにデータ分析で活用するSQLに関する勉強会を実施しています'
const url = 'https://sql-everyone.com/seminar'
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
      name: "application-name",
      content: title,
    },
    {
      name: "apple-mobile-web-app-title",
      content: title,
    },
  ],
})
</script>