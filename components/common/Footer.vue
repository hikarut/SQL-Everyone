<template>
    <!-- ========== FOOTER ========== -->
    <footer class="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-50">
    <!-- <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-50"> -->
    <!-- Grid -->
    <div class="text-center">
        <div>
        <NuxtLink class="flex-none text-xl font-semibold text-black dark:text-white" to="/" aria-label="Brand">SQL Everyone</NuxtLink>
        </div>
        <!-- End Col -->

        <div class="mt-3">
        <p class="text-gray-500 dark:text-neutral-500">
            <p class="mb-2">Copyright &copy;&nbsp;{{ date }}&nbsp;-&nbsp;SQL Everyone</p>
            <p><a href="mailto:ht.hikaru.takahashi@gmail.com">ht.hikaru.takahashi@gmail.com</a></p>
        </p>
        </div>

        <!-- Social Brands -->
        <div class="mt-3 space-x-2">
            <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="https://x.com/light940" target="_blank">
                <img class="opacity-50" width="16" height="16" :src="xLogo" alt="Xロゴ">
            </a>
        </div>
        <!-- End Social Brands -->
    </div>
    <!-- End Grid -->
    </footer>
    <!-- ========== END FOOTER ========== -->
</template>


<script setup>
import xLogo from "~/assets/images/x-logo-black.png";

const date = new Date().getFullYear();
</script>