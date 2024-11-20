<template>
  <!-- Features -->
  <!-- <div class="bg-gray-100"> -->
  <div class="relative overflow-hidden">
    <!-- Gradients -->
    <div
      aria-hidden="true"
      class="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
    >
      <div
        class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"
      ></div>
      <div
        class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"
      ></div>
    </div>
    <!-- End Gradients -->

    <div
      class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative z-10"
    >
      <h2
        class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center mb-6"
      >
        詳細資料
      </h2>
      <div class="aspect-w-16 aspect-h-7">
        <a
          href="https://speakerdeck.com/hikarut/detafen-xi-li-wogao-merusqlyan-xiu-sabisu-sql-everyone"
          target="_blank"
        >
          <img
            class="w-full md:w-1/2 lg:w-1/2 object-cover rounded-xl block mx-auto"
            :src="documentImage"
            alt="Features Image"
          />
        </a>
      </div>

      <!-- Buttons -->
      <div class="mt-8 gap-3 flex justify-center">
        <a
          class="w-64 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 border border-transparent text-white text-lg font-bold rounded-full py-3 px-4"
          href="https://speakerdeck.com/hikarut/detafen-xi-li-wogao-merusqlyan-xiu-sabisu-sql-everyone"
          target="_blank"
        >
          <svg
            class="shrink-0 w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
            />
          </svg>
          資料確認
        </a>
      </div>
      <!-- End Buttons -->
    </div>
    <!-- End Features -->
  </div>
</template>

<script setup>
import documentImage from "~/assets/images/document.jpeg";
</script>