<template>
  <!-- ========== FOOTER ========== -->
  <!-- <footer class="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-tl from-blue-600 to-violet-600"> -->
  <footer class="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-100">
    <!-- <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-50"> -->
    <!-- Grid -->
    <div class="text-center">
      <div>
        <img
          class="rounded-xl w-8 h-8 mx-auto mb-3"
          :src="sqlIconImage"
          alt="Features Image"
        />
      </div>
      <div>
        <NuxtLink
          class="flex-none text-xl font-semibold text-black dark:text-white"
          to="/"
          aria-label="Brand"
          >SQL Everyone</NuxtLink
        >
      </div>
      <!-- End Col -->

      <div class="mt-3">
        <div class="text-gray-500 dark:text-neutral-500">
        <!-- <div class="text-white dark:text-neutral-500"> -->
          <p class="mb-2">
            Copyright &copy;&nbsp;{{ date }}&nbsp;-&nbsp;SQL Everyone
          </p>
          <p>
            <a href="mailto:ht.hikaru.takahashi@gmail.com"
              >ht.hikaru.takahashi@gmail.com</a
            >
          </p>
        </div>
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