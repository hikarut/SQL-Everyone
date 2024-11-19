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

          <!-- Buttons -->
          <div class="mt-8 gap-3 flex justify-center">
            <NuxtLink
              class="w-64 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 border border-transparent text-white text-lg font-bold rounded-full py-3 px-4"
              to="/"
            >
              トップページに戻る
            </NuxtLink>
          </div>
          <!-- End Buttons -->

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
