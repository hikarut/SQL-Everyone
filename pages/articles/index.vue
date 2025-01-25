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
      <!-- <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10"> -->
      <div class="grid lg:grid-cols-1 lg:gap-y-16 gap-10">
        <!-- Card -->
        <NuxtLink
          v-for="blog in blogs?.contents"
          :key="blog.id"
          class="group block rounded-xl overflow-hidden focus:outline-none"
          :to="`/articles/${blog.id}`"
        >
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <!-- <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44"> -->
            <div
              class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-80 h-44"
            >
              <!-- <img
                class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                :src="blog.eyecatch?.url"
                :width="blog.eyecatch?.width"
                :height="blog.eyecatch?.height"
                alt=""
              /> -->
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
                {{ blog.publishedAt ?? blog.createdAt }}
              </p>
              <p
                v-for="(cat, index) in blog.category"
                :key="index"
                class="mr-2 inline-block bg-gray-200 text-gray-700 rounded px-2 py-1 text-sm mt-4"
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
import type { MicroCMSImage } from "microcms-js-sdk";

type Blog = {
  title: string;
  eyecatch: MicroCMSImage;
};

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
  },
});
console.log("blogs");
console.log(blogs.value);

useHead({
  title:
    "データ分析内製化に向けた人材育成サービス『SQL Everyone』主催のセミナー",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content:
        "データ分析内製化に向けた人材育成サービス『SQL Everyone』主催のセミナー",
    },
  ],
});
</script>