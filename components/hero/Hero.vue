<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp, } from '#app'; // Access Apollo Client & Config
import { GET_HERO } from '~/apollo/heroQueries';
import { globals  } from '~/utils/globals';

const heroes = ref([]);
const error = ref(null);
const loading = ref(true);

// Get API base URL from environment variables
const apiBaseUrl = globals.apiUrl

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
  <div class="container">
    <h1>Hero Section</h1>
    
    <div v-if="loading" class="spinner-container">
      <div class="spinner"></div>
    </div>
    
    <div v-if="heroes.length" class="hero">
      <div v-for="hero in heroes" :key="hero.Grll">
        <h2>{{ hero.Grll }}</h2>
        
        <!-- Ensure the image URL exists before rendering -->
        <img 
          v-if="hero.heroImage?.url" 
          :src="getImageUrl(hero.heroImage.url)" 
          alt="Hero Image" 
        />
      </div>
    </div>

    <p v-else>No heroes found</p>
    <p v-if="error">Error: {{ error }}</p>

    <div class="bg-blue-500 text-white p-4">
      <h1>Tailwind CSS is working!</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
