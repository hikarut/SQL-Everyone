<template>
  <div class="py-1 flex justify-center">
    <div
      class="relative overflow-hidden rounded-xl flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-[80%] max-w-screen-xl mb-10"
    >
      <!-- 背景画像 -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-15"
        :style="{ backgroundImage: `url(${sqlImage})` }"
      ></div>
      <!-- 黒のオーバーレイ -->
      <!-- <div class="absolute inset-0 bg-black opacity-40"></div> -->

      <!-- 説明エリア -->
      <div
        class="relative flex-1 flex flex-col justify-center w-full lg:mb-0 lg:mr-6 p-8 mb-1 md:mb-1 pb-1 md:pb-4 lg:pb-8"
      >
        <p class="text-sm text-gray-700 font-semibold">
          <!-- <p class="text-sm text-white font-semibold"> -->
          法人向けのデータ分析内製化支援サービス
        </p>

        <!-- タイトル行：アイコン＋テキスト -->
        <div class="flex items-center mt-2">
          <img :src="sqlIconImage" alt="SQL Icon" class="w-8 h-8 mr-2 mt-1" />
          <h1 class="text-3xl font-bold text-gray-900">SQL Everyone</h1>
          <!-- <h1 class="text-3xl font-bold text-white">SQL Everyone</h1> -->
        </div>

        <ul
          class="list-disc ml-5 mt-4 text-gray-800 space-y-1 text-m font-medium"
        >
          <!-- <ul class="list-disc ml-5 mt-4 text-white space-y-1 text-m font-medium"> -->
          <li>法人向けのデータ分析内製化支援サービス（SQL研修サービス）</li>
          <li>実務でSQLを使うための『マンツーマントレーニングプラン』あり</li>
          <li>ハンズオン形式で学習の仕方をサポート</li>
        </ul>
      </div>

      <!-- アクションエリア -->
      <div
        class="relative flex-1 flex flex-col md:flex-row justify-center items-center gap-4 w-full p-8"
      >
        <div
          class="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-center w-full"
        >
          <div class="rounded-full bg-gray-100 p-3 mb-4">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 2C7.895 2 7 2.895 7 4v1H5c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2h-2V4c0-1.105-.895-2-2-2H9zm0 2h6v1H9V4zM5 7h14v12H5V7zm2 2v2h10V9H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7z"
              />
            </svg>
          </div>
          <p
            class="text-s sm:text-sm text-center text-gray-500 mb-4 font-medium"
          >
            担当者より順次<br />ご連絡させていただきます
          </p>
          <a
            href="https://forms.gle/CFKuJCcG81J5EwVA6"
            target="_blank"
            class="w-full flex justify-center"
          >
            <button
              class="w-full max-w-[240px] bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white rounded-full px-4 py-2 text-m font-bold"
            >
              無料でお問い合わせ
            </button>
          </a>
        </div>

        <div
          class="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-center w-full"
        >
          <div class="rounded-full bg-gray-100 p-3 mb-4">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
              />
            </svg>
          </div>
          <p
            class="text-s sm:text-sm text-center text-gray-500 mb-4 font-medium"
          >
            SQL Everyoneについて<br />詳細をご確認いただけます
          </p>
          <NuxtLink to="/" class="w-full flex justify-center" target="_blank">
            <button
              class="w-full max-w-[240px] bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white rounded-full px-4 py-2 text-m font-bold"
            >
              詳細を確認
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sqlImage from "~/assets/images/sql_image.png";
import sqlIconImage from "~/public/sql_icon.png";
</script>