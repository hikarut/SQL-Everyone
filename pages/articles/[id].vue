<template>
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl">
      <!-- Content -->
      <div class="space-y-5 md:space-y-8">
        <figure>
          <img
            class="w-full object-cover rounded-xl"
            :src="data.eyecatch?.url"
            :width="data.eyecatch?.width"
            :height="data.eyecatch?.height"
            alt=""
          />
        </figure>

        <h1
          class="font-bold text-xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-10 mt-10"
        >
          {{ data.title }}
        </h1>

        <div
          v-html="data.content"
          class="text-lg text-gray-800 dark:text-neutral-200 space-y-6 prose"
        ></div>

        <div>
          <a
            class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Plan
          </a>
          <a
            class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Web development
          </a>
          <a
            class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Free
          </a>
          <a
            class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Team
          </a>
        </div>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Blog Article -->
</template>

<script setup lang="ts">
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
console.log("blog detail");

const { params } = useRoute();

export type Blog = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
};

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data.value)

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