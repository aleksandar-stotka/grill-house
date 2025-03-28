<template>
  <div class="bg-black text-white min-h-screen p-10">
    <!-- Header -->
    <div class="text-center text-orange-600 text-5xl font-extrabold tracking-wide uppercase">
      SKARA<span class="block text-red-700">HOUSE</span>
    </div>
    <div class="text-right text-white text-sm mt-2">OPEN 11AM - 9PM <br> WEee CATER!</div>
    
    <!-- Menu Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div v-for="(burger, index) in menu" :key="index" class="relative bg-gray-900 border border-orange-600 rounded-lg p-6 text-center transition-all duration-300 hover:bg-orange-700 hover:scale-105 group">
        <!-- Burger Image -->
        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden">
          <img :src="getImageUrl(burger.grillmenuimage.url)" :alt="burger.productname" class="w-full h-full object-cover rounded-full border-4 border-orange-600">
        </div>

        <!-- Text Content -->
        <div class="mt-14">
          <h2 class="text-2xl font-black text-orange-500 transition-colors duration-300 group-hover:text-white uppercase">
            {{ burger.productname }}
          </h2>
          <p class="mt-2 text-white-300 text-sm transition-colors duration-300 group-hover:text-white">
            {{ burger.grildescription }}
          </p>
          <p class="mt-3 text-lg font-bold text-orange-500 transition-colors duration-300 group-hover:text-white">
            ${{ burger.price }}
          </p>
        </div>
      </div>    
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { GET_MEIN_MENU } from '~/apollo/mainMenu/mainMenuQueries';
import { globals } from '#imports';

const apiBaseUrl = globals.apiUrl;
const menu = ref([]);

// Fetch menu data from GraphQL server
onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_MEIN_MENU,
      fetchPolicy: 'no-cache' // Ensures fresh data from Strapi
    });
    menu.value = data.grillmenus;
    console.log('Fetched menu:', menu.value);
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
body {
  font-family: 'Arial',   sans-serif;
}
</style>