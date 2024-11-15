<template>
  <!-- Features -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h2
      class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-3"
    >
      サービス概要
    </h2>
    <!-- Grid -->
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
      <div>
        <img class="rounded-xl" :src="featureImage" alt="Features Image" />
        <!-- <img class="rounded-xl" :src="levelImage" alt="Features Image" /> -->
      </div>
      <!-- End Col -->

      <div class="mt-5 sm:mt-10 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <!-- Title -->
          <div class="space-y-2 md:space-y-4">
            <div class="text-gray-500 dark:text-neutral-500">
              <p class="mb-3">
                『SQL Everyone』はデータ分析内製化支援サービスです。
              </p>
              <p>
                目的・レベルに合わせたSQL分析人材を育成することでデータ分析内製化を支援します。SQLを全く知らない人が受けてもデータ分析で使えるSQLが学べるように、2つのサービスを提供しています。
              </p>
            </div>
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
                  class="text-base sm:text-lg text-gray-500 dark:text-neutral-500"
                >
                  SQLの基礎をハンズオンで学ぶ<span
                    class="font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent"
                    >『集合研修プラン』</span
                  >
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
                  class="text-base sm:text-lg text-gray-500 dark:text-neutral-500"
                >
                  実務のデータ分析でSQLを使えるようにする<span
                    class="font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent"
                    >『マンツーマントレーニングプラン』</span
                  >
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

    <!-- <div>
      <img
        class="mt-3 w-full md:w-1/2 lg:w-1/2 object-cover block mx-auto"
        :src="levelImage"
        alt="データ分析に必要なSQLの6つのレベル"
      />
    </div> -->

    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <!-- Card -->
        <div
          class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <div
            class="h-52 flex flex-col justify-center items-center rounded-t-xl"
          >
            <p class="mr-8 ml-8 text-3xl font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">集合研修プラン</p>
          </div>
          <div class="p-4 md:p-6">
            <span
              class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"
            >
              ティーチング
            </span>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white"
            >
              データ分析で使うSQLの基礎を学習
            </h3>
            <p class="mt-3 text-gray-500 dark:text-neutral-500">
              ビジネスパーソン向けにSQLの基礎について学習。ハンズオンを交えてデータ分析で使うSQLについて理解を深める研修。
            </p>
          </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <div
            class="h-52 flex flex-col justify-center items-center rounded-t-xl"
          >
            <p class="mr-8 ml-8 text-3xl font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">マンツーマントレーニングプラン</p>
          </div>
          <div class="p-4 md:p-6">
            <span
              class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"
            >
              ティーチング + コーチング
            </span>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white"
            >
              実務のデータ分析でSQLが使えるレベルに成長
            </h3>
            <p class="mt-3 text-gray-500 dark:text-neutral-500">
              データ分析で使うSQLをマンツーマンで基礎から応用まで学習。ゼロから3ヶ月で実務でSQLを使えるレベルまで成長をサポート。
            </p>
          </div>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->

  </div>
  <!-- End Features -->
</template>

<script setup>
import featureImage from "~/assets/images/seminar.png";
</script>