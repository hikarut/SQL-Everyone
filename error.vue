<!-- layouts/error.vue -->
<template>
  <div>
    <CommonHeader />
    <div class="max-w-[50rem] flex flex-col mx-auto size-full">
      <!-- ========== MAIN CONTENT ========== -->
      <main id="content">
        <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1
            class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white"
          >
            404
          </h1>
          <p class="mt-3 text-gray-600 dark:text-neutral-400">
            ページが見つかりません。
          </p>
          <div
            class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
          >
            <NuxtLink
              class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              to="/"
            >
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              トップページに戻る
            </NuxtLink>
          </div>
        </div>
      </main>
      <!-- ========== END MAIN CONTENT ========== -->

    </div>
    <CommonFooter />
  </div>
</template>

<script setup>
// error.vueは自動的にエラーメッセージやステータスコードを受け取ります。
// 必要に応じて、エラーステータスコードに基づいて条件分岐を行うことができます。
defineProps({
  error: {
    type: Object,
    default: () => ({
      statusCode: 404,
      message: "Page not found",
    }),
  },
});
</script>
