<template>
  <div class="py-1 flex justify-center">
    <div class="relative overflow-hidden rounded-xl flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-[80%] max-w-screen-xl mb-10">
      <!-- 背景画像 -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-15"
        :style="{ backgroundImage: `url(${booksImage})` }"
      ></div>
      <!-- 黒のオーバーレイ -->
  <!-- <div class="absolute inset-0 bg-black opacity-70"></div> -->


      <!-- 説明エリア -->
      <div class="relative flex-1 flex flex-col justify-center w-full lg:mb-0 lg:mr-6 p-8 mb-1 md:mb-1 pb-1 md:pb-4 lg:pb-8">
        <p class="text-sm text-gray-700 font-semibold">
        <!-- <p class="text-sm text-white font-semibold"> -->
          SQL入門書
        </p>
        <h1 class="text-3xl font-bold mt-2 text-gray-900">データ分析力を高める ビジネスパーソンのためのSQL入門</h1>
        <!-- <h1 class="text-3xl font-bold mt-2 text-white">データ分析力を高める ビジネスパーソンのためのSQL入門</h1> -->
        <ul class="list-disc ml-5 mt-4 text-gray-800 space-y-1 text-m font-medium">
        <!-- <ul class="list-disc ml-5 mt-4 text-white space-y-1 text-m font-medium"> -->
          <li>ビジネスパーソン向けデータ分析のためのSQL入門書</li>
          <li>データ分析で使うSQLについて必要最小限で最短で学べる本</li>
          <li>ハンズオン形式でゼロから実践で使えるSQLが学べる</li>
        </ul>
      </div>

      <!-- アクションエリア（画像 + ボタン） -->
      <div class="relative flex-1 flex flex-col items-center w-full p-8">
        <!-- 書籍画像 -->
        <a href="https://www.amazon.co.jp/dp/4297134438/" target="_blank">
        <img
          :src="book"
          alt="書籍画像"
          class="max-w-[120px] w-full rounded-lg shadow-md mb-4"
        />
        </a>

        <!-- ボタン -->
        <a
          href="https://www.amazon.co.jp/dp/4297134438/"
          target="_blank"
          class="w-full md:w-auto text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white rounded-full px-6 py-3 text-m font-bold transition"
        >
          詳細を確認
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import booksImage from "~/assets/images/books_image.png";
import book from "~/assets/images/book.jpg";
</script>
