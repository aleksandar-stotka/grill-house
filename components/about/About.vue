<template>
  <section class="bg-[#fef7f2] py-16 px-6 md:px-12 lg:px-24">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto"
    >
      <!-- Image Section -->
      <!-- Image Section -->
      <img
        :src="getImageUrl(aboutData[0]?.aboutusImage[0]?.url)"
        alt="About Us Image"
        class="w-full h-auto rounded-lg shadow-lg"
      />

      <!-- Text Content -->
      <div class="text-center md:text-left">
        <!-- Label -->
        <span
          class="bg-[#a23c6e] text-white text-xs uppercase font-semibold px-3 py-1 rounded-full"
        >
          About Us
        </span>

        <!-- Heading -->
        <h2
          class="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          {{ aboutData[0]?.abouttext }} <br class="hidden md:block" />
        </h2>

        <!-- Description -->
        <!-- Description -->
<div class="mt-4 text-gray-600 text-lg">
  <div v-for="(block, index) in descriptionBlocks" :key="index">
    <p v-for="(child, childIndex) in block.children" :key="childIndex">
      {{ child.text }}
    </p>
  </div>
</div>

        <!-- Bullet Points -->
        <ul
          class="mt-6 space-y-2 md:space-y-0 md:flex md:space-x-6 text-gray-800 font-semibold"
        >
          <li class="flex items-center space-x-2">
            <span class="text-orange-500">•</span> Locally-Sourced Beef
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-orange-500">•</span> Organic Ingredients
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-orange-500">•</span> Sustainable Practices
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-orange-500">•</span> Custom Blend
          </li>
        </ul>

        <!-- Button -->
        <div class="mt-6">
          <button
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
  <script setup>
import { globals } from "#imports";
import { onMounted, ref } from "#imports";
import { useNuxtApp } from "#imports";
import { GET_ABOUT } from "~/apollo/about/aboutQueries";
console.log(globals);

const apiBaseUrl = globals.apiUrl;

const aboutData = ref([]);
const descriptionBlocks = ref([]);


onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_ABOUT,
    });

    aboutData.value = data.heroes;
    
    // Fix: Correctly assign the descriptionAbout
    descriptionBlocks.value = aboutData.value[0]?.descriptionAbout || [];

    console.log(aboutData.value, "about");
  } catch (err) {
    console.error("Error fetching About data:", err);
  }
});


const getImageUrl = (path) => {
  return path?.startsWith("http") ? path : `${apiBaseUrl}${path}`;
};
</script>
  
  <style scoped>
/* Ensures good mobile responsiveness */
@media (max-width: 768px) {
  .text-container {
    text-align: center;
  }
}
</style>
  