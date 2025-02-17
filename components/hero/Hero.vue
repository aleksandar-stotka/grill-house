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

<template>
  <div class="relative min-h-screen">
    <!-- 🏠 Fixed Navbar -->
   

    <!-- 🌄 Fullscreen Hero Background -->
    <div v-if="heroes.length" class="hero-background" 
         :style="{ backgroundImage: `url(${getImageUrl(heroes[0].heroImage?.url)})` }"></div>

    <!-- 📜 Main Content -->
    <div class="relative z-10 pt-24 px-6 md:px-12 lg:px-24">
      <h1 class="text-4xl font-extrabold text-gray-900 text-center">Hero Section</h1>
      
      <div v-if="loading" class="flex justify-center mt-8">
        <div class="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>
      
      <div v-if="heroes.length" class="hero mt-8 text-center">
        <h2 class="text-2xl font-semibold">{{ heroes[0].Grll }}</h2>
      </div>

      <p v-else class="text-center text-gray-700 mt-4">No heroes found</p>
      <p v-if="error" class="text-red-500 text-center mt-2">Error: {{ error }}</p>

      <!-- 📌 Extra Content -->
      <div class="extra-content mt-16 p-8 bg-white shadow-md rounded-lg">
        <p class="text-lg text-gray-800 text-center">
          Scroll down and see how the hero image stays in the background.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 🌄 Hero Background Image */
.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Push behind everything */
}
</style>
