<template>
  <!-- Features -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h2
        class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-3"
    >
        研修概要
    </h2>
    <!-- Grid -->
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
      <div>
        <img class="rounded-xl" :src="featureImage" alt="Features Image" />
      </div>
      <!-- End Col -->

      <div class="mt-5 sm:mt-10 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <!-- Title -->
          <div class="space-y-2 md:space-y-4">
            <p class="text-gray-500 dark:text-neutral-500">
              <p>『SQL Everyone』はデータ分析内製化に向けた人材育成サービスです。</p>
              <p>そのためにSQLを使ったデータ分析人材の育成をサポートします。SQLを全く知らない人が受けてもデータ分析で使えるSQLが学べるように、短期間でハンズオンを実施しながら効率よくSQLを学ぶサービスとなっています。</p>
            </p>
          </div>
          <!-- End Title -->

          <!-- List -->
          <ul class="space-y-2 sm:space-y-4">
            <li class="flex gap-x-3">
              <span
                class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500"
              >
                <svg
                  class="shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div class="grow">
                <span
                  class="text-sm sm:text-base text-gray-500 dark:text-neutral-500"
                >
                  <span class="font-bold">ゼロから誰でも</span>SQLを学ぶことができる
                </span>
              </div>
            </li>

            <li class="flex gap-x-3">
              <span
                class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500"
              >
                <svg
                  class="shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div class="grow">
                <span
                  class="text-sm sm:text-base text-gray-500 dark:text-neutral-500"
                >
                  Powerful <span class="font-bold">features</span>
                </span>
              </div>
            </li>

            <li class="flex gap-x-3">
              <span
                class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500"
              >
                <svg
                  class="shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div class="grow">
                <span
                  class="text-sm sm:text-base text-gray-500 dark:text-neutral-500"
                >
                  User Experience Design
                </span>
              </div>
            </li>
          </ul>
          <!-- End List -->
        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features -->
</template>

<script setup>
import featureImage from "~/assets/images/seminar.png";
</script>