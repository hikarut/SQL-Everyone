<template>
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h1
      class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-6"
    >
      記事一覧
    </h1>

    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid lg:grid-cols-1 lg:gap-y-16 gap-10">
        <!-- Card -->
        <NuxtLink
          v-for="blog in blogs?.contents"
          :key="blog.id"
          class="group block rounded-xl overflow-hidden focus:outline-none"
          :to="`/articles/${blog.id}`"
        >
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <div
              class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-80 h-30"
            >
              <img
                class="w-full object-cover rounded-xl"
                :src="blog.eyecatch?.url"
                :width="blog.eyecatch?.width"
                :height="blog.eyecatch?.height"
                alt=""
              />
            </div>

            <div class="grow">
              <h3
                class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white"
              >
                {{ blog.title }}
              </h3>
              <p class="mt-3 text-gray-600 dark:text-neutral-400">
                <!-- {{ dateFormat(blog.publishedAt) ?? dateFormat(blog.createdAt) }} -->
                {{ dateFormat(blog.publishedAt) }}
              </p>
              <p
                v-for="(cat, index) in blog.category"
                :key="index"
                class="mr-2 mt-2 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                {{ cat.name }}
              </p>
            </div>
          </div>
        </NuxtLink>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
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
  // queries: { fields: ["id", "title", "eyecatch"] },
  queries: {
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

const title = 'SQL Everyone 記事一覧'
const description = 'SQLやデータ分析に関する記事やイベントの情報など発信しています'
const url = 'https://sql-everyone.com/articles'
useHead({
  title: title,
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

definePageMeta({
  // "静的生成されていないIDでは 404 とする" オプション
  dynamic: "error",
  dynamicParams: false,
  prerender: true,
})
</script>