<template>
  <section class="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 md:p-12">
    <!-- Text Content -->
    <div class="relative z-10 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-extrabold text-black">
        DELIGHT IN EVERY BITE AT
        <span class="text-orange-500">“SKARA HOUSE”</span>
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        Lorem ipsum dolor sit amet consectetur. Sed euismod justo volutpat malesuada. 
        Purus in pellentesque a convallis morbi convallis.
      </p>
      
      <div class="mt-6 flex items-center space-x-4 justify-center md:justify-start">
        <!-- Ingredients Icons -->
        <div class="flex space-x-2">
          <img src="/assets/bbq.png" alt="Icon 1" class="h-8">
          <img src="/assets/grill.png" alt="Icon 1" class="h-8">
          <img src="/assets/grill2.png" alt="Icon 1" class="h-8">
          
        </div>
      </div>
      
      <button class="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600">
        ORDER NOW
      </button>
    </div>

    <!-- Photo (on right side for larger screens) -->
    <div v-if="heroes.length" class="relative">
      <img 
        :src="getImageUrl(heroes[0].heroImage?.url)" 
        alt="Hero Image"
        class="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { GET_HERO } from '~/apollo/heroQueries';
import { globals } from '~/utils/globals';

const heroes = ref([]);
const error = ref(null);
const loading = ref(true);

// Use the global API URL
const apiBaseUrl = globals.apiUrl;

// Fetch data from GraphQL server using Apollo Client
onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_HERO
    });
    heroes.value = data.heroes;
    loading.value = false;
  } catch (err) {
    error.value = err;
    console.error('GraphQL Error:', error.value);
  }
});

// Helper function to construct image URLs safely
const getImageUrl = (path) => {
  return path?.startsWith('http') ? path : `${apiBaseUrl}${path}`;
};
</script>

<style scoped>
/* background */

/* Styles to ensure the photo is on the right */
@media (max-width: 768px) {
  /* On small screens, the layout will be stacked, text on top and image below */
  section {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1024px) {
  /* On larger screens, the text is on the left, and image is on the right */
  section {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
