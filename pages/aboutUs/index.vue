<template>
  <section class="relative w-full">
    <!-- Hero Image -->
    <div class="w-full h-[300px] md:h-[300px] bg-cover bg-center" 
         :style="{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }">
      <div class="w-full h-full flex items-center justify-center bg-opacity-50">
        <h2 class="text-5xl font-extrabold text-green-500 text-left">ABOUT US</h2>
      </div>
    </div>

    <div class="bg-white py-16 px-6 md:px-20">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-8">
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <img v-if="aboutusData.length > 0" 
               :src="getImageUrl(aboutusData[0].burgerphoto.url)" 
               alt="Deconstructed Burger" 
               class="w-full max-w-md">
        </div>
        
        <!-- Text Content -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <h2 class="text-4xl font-extrabold text-gray-900">JUICY GRILL, UNMATCHED FLAVOR</h2>
          <p v-if="aboutusData.length > 0" class="text-gray-600 mt-4">
            {{ aboutusData[0].description }}
          </p>
          
          <ul class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li class="flex items-center gap-2"><span class="text-green-500">✔</span> Locally-Sourced Beef</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✔</span> Organic Ingredients</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✔</span> Sustainable Practices</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✔</span> Custom Blend</li>
          </ul>
          
          <!-- Owner Info -->
          <div class="mt-6 flex items-center gap-4">
            <img v-if="aboutusData.length > 0" 
                 :src="getImageUrl(aboutusData[0].ownerphoto.url)" 
                 alt="Owner" 
                 class="w-12 h-12 rounded-full">
            <div>
              <p class="text-gray-900 font-bold">{{ aboutusData.length > 0 ? aboutusData[0].ownername : 'ETHAN RODRIGUEZ' }}</p>
              <p class="text-pink-600 text-sm">CEO - Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { GET_ABOUTUS_PAGE } from '~/apollo/aboutmain/aboutusPageQueries';
import { globals } from '#imports';

const apiBaseUrl = globals.apiUrl;
const aboutusData = ref([]);
const heroImage = ref(''); // Store hero image URL

// Fetch data from GraphQL server using Apollo Client
onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_ABOUTUS_PAGE
    });
    aboutusData.value = data.aboutuspages;

    if (aboutusData.value.length > 0 && aboutusData.value[0].herophoto?.url) {
      heroImage.value = getImageUrl(aboutusData.value[0].herophoto.url);
    }
  } catch (err) {
    console.error('GraphQL Error:', err);
  }
});

// Helper function to construct image URLs safely
const getImageUrl = (path) => {
  return path?.startsWith('http') ? path : `${apiBaseUrl}${path}`;
};  
</script>


<style scoped>
/* Add any custom styling if needed */
</style>
