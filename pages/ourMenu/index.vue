<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
    
    <div 
      v-for="(burger, index) in menu" 
      :key="index"
      class="relative bg-white border border-black rounded-lg p-6 text-center transition-all duration-300 hover:bg-custom-pink hover:scale-105 hover:h-[310px] h-[300px] group"
    >
      <!-- Burger Image (slightly outside the card, no visible border) -->
      <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden">
        <img :src="getImageUrl(burger.grillmenuimage.url)" :alt="burger.productname" class="w-full h-full object-cover rounded-full">
      </div>

      <!-- Text Content -->
      <div class="mt-14">
        <h2 class="text-2xl font-black transition-colors duration-300 group-hover:text-custom-orange">
          {{ burger.productname }}
        </h2>
        <p class="mt-2 text-gray-600 text-sm transition-colors duration-300 group-hover:text-white">
          {{ burger.grildescription }}
        </p>
        <p class="mt-3 text-lg font-bold transition-colors duration-300 group-hover:text-white">
          ${{ burger.price }}
        </p>
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
      query: GET_MEIN_MENU
    });
    menu.value = data.grillmenus;
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
@media (max-width: 768px) {
  section {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1024px) {
  section {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
