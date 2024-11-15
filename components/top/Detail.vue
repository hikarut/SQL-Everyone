<template>
  <!-- Icon Blocks -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h2
      class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-8"
    >
      SQL Everyoneの3つの特徴
    </h2>
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10"
    >
      <!-- Card -->
      <div
        class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900"
      >
        <div class="flex items-center gap-x-4 mb-3">
          <div
            class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
          >
            <svg
              class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
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
                d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
              />
            </svg>
          </div>
          <div class="shrink-0">
            <h3
              class="block text-lg font-semibold text-gray-800 dark:text-white"
            >
              ハンズオンでサポート
            </h3>
          </div>
        </div>
        <p class="text-gray-600 dark:text-neutral-400">
          ただ説明を聞くだけではなくPCでSQLを実行できる環境を用意して実際にSQLを実行しながらハンズオン形式で進める（環境構築もサポート）
        </p>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div
        class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900"
      >
        <div class="flex items-center gap-x-4 mb-3">
          <div
            class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
          >
            <svg
              class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div class="shrink-0">
            <h3
              class="block text-lg font-semibold text-gray-800 dark:text-white"
            >
              学習の仕方をサポート
            </h3>
          </div>
        </div>
        <p class="text-gray-600 dark:text-neutral-400">
          一方的にならずにインタラクティブに学習。研修後のアフターフォローとしてSQLに関する質問にも回答、ChatGPTなどの生成AIを活用して学習の仕方をサポート
        </p>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div
        class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900"
      >
        <div class="flex items-center gap-x-4 mb-3">
          <div
            class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
          >
            <svg
              class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div class="shrink-0">
            <h3
              class="block text-lg font-semibold text-gray-800 dark:text-white"
            >
              実務で使えるSQLを学習
            </h3>
          </div>
        </div>
        <p class="text-gray-600 dark:text-neutral-400">
          データ分析に特化したSQL研修にすることで短期間で学習が可能。講師の実体験をもとに実際のデータ分析で使うSQLのTipsなども混ぜながら学習
        </p>
      </div>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Icon Blocks -->
</template>

<script setup>
import featureImage from "~/assets/images/seminar.png";
</script>