<template>
  <!-- ========== FOOTER ========== -->
  <!-- <footer class="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-tl from-blue-600 to-violet-600"> -->
  <footer class="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  <!-- <footer class="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-100"> -->
    <!-- <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-50"> -->
    <!-- Grid -->
    <div class="text-center">
      <div>
        <img
          class="rounded-xl w-8 h-8 mx-auto mb-3"
          :src="sqlIconImage"
          alt="SQL Everyone Icon"
        />
      </div>
      <div class="mb-4">
        <NuxtLink
          class="flex-none text-xl font-semibold text-black dark:text-white"
          to="/"
          aria-label="Brand"
          >SQL Everyone</NuxtLink
        >
      </div>

      <div class="text-sm text-gray-500 dark:text-neutral-500 mb-3 space-x-4">
        <NuxtLink to="/terms" class="hover:text-gray-600 dark:hover:text-neutral-400">
          利用規約
        </NuxtLink>
        <span>|</span>
        <NuxtLink to="/privacy" class="hover:text-gray-600 dark:hover:text-neutral-400">
          プライバシーポリシー
        </NuxtLink>
      </div>

      <div class="text-gray-500 dark:text-neutral-500 text-sm">
        <p class="mb-1">
          Copyright &copy;&nbsp;{{ date }}&nbsp;-&nbsp;SQL Everyone
        </p>
        <p>
          <a href="mailto:ht.hikaru.takahashi@gmail.com" class="hover:text-gray-600 dark:hover:text-neutral-400"
            >ht.hikaru.takahashi@gmail.com</a
          >
        </p>
      </div>

    </div>
    <!-- End Grid -->
  </footer>
  <!-- ========== END FOOTER ========== -->
</template>


<script setup>
import xLogo from "~/assets/images/x-logo-black.png";
import sqlIconImage from "~/public/sql_icon.png";

const date = new Date().getFullYear();
</script>