<template>
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

    <!-- FAQ -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative z-10">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2
          class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
        >
          FAQ
        </h2>
        <!-- <p class="mt-1 text-gray-600 dark:text-neutral-400">
          Answers to the most frequently asked questions.
        </p> -->
      </div>
      <!-- End Title -->

      <div class="max-w-2xl mx-auto">
        <!-- Accordion -->
        <div class="hs-accordion-group">
          <div
            class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              もう少し詳細な話を聞いてみたいのですが？
              <svg
                class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <p class="text-gray-600 dark:text-neutral-200">
                ぜひまずは無料でご相談できればと思います。お問い合わせフォームからお問い合わせください。それ以外でもメール（ht.hikaru.takahashi@gmail.com）やX（旧Twitter）でも気軽にご相談ください。
              </p>
            </div>
          </div>

          <div
            class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              今の時代SQLって必要ですか？ChatGPTがあれば不要では？
              <svg
                class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p class="text-gray-600 dark:text-neutral-200">
                結論としてはSQLの学習は必要だと考えています。確かにChatGPTなどの生成AIの登場によって、データ分析も簡単にできる時代に変わったのも事実です。一方で生成AIもまだまだ完璧ではなく間違ったことも出力するので、出てきた結果を正しく解釈して使いこなす能力も必要になります。その意味でSQLに関しても基本的な知識を持った上で、生成AIをうまく活用しながらSQLを学習することが重要だと思っています。
              </p>
            </div>
          </div>

          <div
            class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
            id="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
            >
              支援するのはSQLの人材育成だけですか？
              <svg
                class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-four"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <p class="text-gray-600 dark:text-neutral-200">
                まず大事なのはスキルを身につけることなので、最初のきっかけとしてはSQLの学習をお勧めします。ただ、それ以外にもデータ分析組織開発に向けてのコンサルや壁打ちなどのご相談にも乗れます。中長期的に一緒にデータ分析力を高めるお手伝いができればと思いますので、SQL研修以外でも気になることがあればまずはお気軽にご相談ください。
              </p>
            </div>
          </div>

        </div>
        <!-- End Accordion -->
      </div>
    </div>
    <!-- End FAQ -->
  </div>
</template>

<script setup>
import profileImage from "~/assets/images/profile.jpg";
import bookImage from "~/assets/images/book.jpg";
</script>