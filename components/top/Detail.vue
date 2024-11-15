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
              <circle cx="13.5" cy="6.5" r=".5" />
              <circle cx="17.5" cy="10.5" r=".5" />
              <circle cx="8.5" cy="7.5" r=".5" />
              <circle cx="6.5" cy="12.5" r=".5" />
              <!-- <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
              /> -->
              <path d="M3 4h18v12H3V4zm2 2v8h14V6H5zm-2 12h20v2H3v-2z" />
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
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
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
              <path
                d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
              />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
              <path d="M2 7h20" />
              <path
                d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"
              />
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