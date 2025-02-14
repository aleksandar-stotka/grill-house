<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app'; // To access the Apollo Client
import { GET_HERO } from '~/apollo/heroQueries';

const heroes = ref([]);
const error = ref(null);

// Fetch data from GraphQL server using Apollo Client
onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_HERO
    });
    heroes.value = data.heroes;
  } catch (err) {
    error.value = err;
    console.error('GraphQL Error:', error.value);
  }
});
</script>

<template>
  <div class="container">
    <h1>Hero Section</h1>
    
    <div v-if="heroes.length" class="hero">
      <div v-for="hero in heroes" :key="hero.Grll">
        <h2>{{ hero.Grll }}</h2>
        <img :src="`http://localhost:1337${hero.heroImage.url}`" alt="Hero Image" />
      </div>
    </div>

    <p v-else>No heroes found</p>
    <p v-if="error">Error: {{ error }}</p>
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
