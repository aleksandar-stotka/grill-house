<template>
  <section class="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 md:p-12">
    <!-- Text Content -->
    <div class="relative z-10 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-extrabold text-black">
        Delight in Every Bite <br>
        at 
        <span class="text-orange-500">Skara House</span>
      </h1>

      <!-- Iterate over the description (structured text) -->
      

      <div class="mt-6 flex items-center space-x-4 justify-center md:justify-start">
        <!-- Ingredients Icons -->
        <div class="flex space-x-2">
          <img src="/assets/bbq.png" alt="Icon 1" class="h-8">
          <img src="/assets/grill.png" alt="Icon 1" class="h-8">
          <img src="/assets/grill2.png" alt="Icon 1" class="h-8">
        </div>
       
      </div>
        
        <div class="flex space-x-4 mt-4">
          <a href="https://www.ubereats.com/au/store/skara-house/e3MKaL3SXpaKDyq3ZbnUJQ?ps=1" class="text-xl hover:text-orange-400"><span class="font-extrabold">          <img src="/assets/uberLogo.svg" alt="Icon 1" class="h-8">
          </span></a>

            <a href="https://www.facebook.com/profile.php?id=61573204824323" class="text-xl hover:text-orange-400"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/skara.house/" class="text-xl hover:text-orange-400"><i class="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@skara_house?_t=ZS-8uCt8PVYwSX&_r=1" class="text-xl hover:text-orange-400"><i class="fab fa-tiktok"></i></a>
          </div>
    </div>

    <!-- Photo (on right side for larger screens) -->
    <div>
      <img 
        src="/public/menu/main-hero.jpg"
        alt="Hero Image"
        class="w-full max-w-[450px] h-auto rounded-lg shadow-lg md:max-w-[500px]"
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
const descriptionBlocks = ref([]);
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
    descriptionBlocks.value = data.heroes[0].description || []; // Assuming the description is in the first hero
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
