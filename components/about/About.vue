<template>
  <section class="bg-[#fef7f2] py-16 px-6 md:px-12 lg:px-24">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto"
    >
      <!-- Image Section -->
      <!-- Image Section -->
      <img
        :src="getImageUrl(aboutData[0]?.aboutusImage[0]?.url)"
        alt="About"
        class="w-full h-auto "
      />

      <!-- Text Content -->
      <div class="text-center md:text-left">
        <!-- Label -->
        <span
          class="bg-[#a23c6e] text-white text-lg uppercase font-semibold px-3 py-1 rounded-full"
        >
          About Us
        </span>

        <!-- Heading -->
      

        <!-- Description -->
        <!-- Description -->
<div class="mt-4 text-gray-600 text-2xl
">
  <div v-for="(block, index) in descriptionBlocks" :key="index">
    <p v-for="(child, childIndex) in block.children" :key="childIndex">
      {{ child.text }}
    </p>
  </div>
</div>

     

        <!-- Button -->
        <div class="mt-6">
          <NuxtLink to="/aboutUs"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Learn More
          </NuxtLink>
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
  