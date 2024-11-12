<template>
  <div class="bg-gray-100">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2
        class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-6"
      >
        講師紹介
      </h2>
      <!-- Profile -->
      <div class="flex items-center gap-x-3">
        <div class="shrink-0">
          <img
            class="shrink-0 size-16 rounded-full w-32 h-32"
            :src="profileImage"
            alt="Avatar"
          />
        </div>

        <div class="grow">
          <h1 class="text-lg font-medium text-gray-800 dark:text-neutral-200">
            高橋 光（Takahashi Hikaru）
          </h1>
          <p class="text-sm text-gray-600 dark:text-neutral-400">
            元Webエンジニア / データアナリスト /
            デジタルマーケティングコンサルタント / データドリブンコンサルタント
          </p>
        </div>
      </div>
      <!-- End Profile -->

      <!-- About -->
      <div class="mt-8">
        <p class="text-sm text-gray-600 dark:text-neutral-400">
          青山学院大学経営システム工学科卒業。新卒でヤフー株式会社に入社し、Webエンジニアとしてサービスの開発、運用、企画、提案、など幅広くサービスに貢献。
        </p>

        <p class="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          2016年からは株式会社イーブックイニシアティブジャパンに出向し、社内でデータサイエンスグループを立ち上げ部長として社内のデータ活用を促進。
          マーケティング施策の効果検証、事業分析、プロダクトのABテストなどデータを活用した意思決定に貢献。チームメンバーのSQLスキルアップや社内全体でのSQL勉強会などのデータ活用スキルアップ活動なども行い、組織全体をデータドリブンにする活動を実施。
        </p>

        <p class="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          2021年から外資系コンサルティング企業に入社し、SQLを使ったデータ分析などデータを活用したマーケティング支援を実施。
          また複業として複数社でSQLを活用したデータ分析のサポート経験あり。
        </p>

        <ul class="mt-5 flex flex-col gap-y-3">
          <li class="flex items-center gap-x-2.5">
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
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a
              class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="#"
            >
              elianagarcia997@about.me
            </a>
          </li>

          <li class="flex items-center gap-x-2.5">
            <svg
              class="shrink-0 size-3.5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z"
                fill="currentColor"
              />
            </svg>
            <a
              class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="#"
            >
              @elianagarcia997
            </a>
          </li>
        </ul>
      </div>
      <!-- End About -->
    </div>
  </div>
</template>

<script setup>
import profileImage from "~/assets/images/profile.jpg";
</script>