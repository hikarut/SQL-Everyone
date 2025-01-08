<template>
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

    <img
      :src="data.eyecatch?.url"
      :width="data.eyecatch?.width"
      :height="data.eyecatch?.height"
      alt=""
    />

    <h1
      class="font-bold text-xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-10 mt-10"
    >
      {{ data.title }}
    </h1>

    <div v-html="data.content"></div>

  </div>
  <!-- End Card Blog -->
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