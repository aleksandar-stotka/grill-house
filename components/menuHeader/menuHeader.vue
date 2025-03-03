<template>
    <div>
      <div v-if="loading">Loading categories...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
        <div v-for="cat in categoriesData" :key="cat.id">
          <NuxtLink :to="`/ourMenu/${cat.id}`" class="category-link">
            <h1>{{ cat.name || 'Unnamed Category' }}</h1>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "#imports";
  import { useNuxtApp } from "#imports";
  import { GET_CATEGORIES } from "~/apollo/categories/categoriesQueries";
  
  const categoriesData = ref([]);
  const loading = ref(true);
  const error = ref(null);
  
  onMounted(async () => {
    try {
      const { data } = await useNuxtApp().$apolloClient.query({
        query: GET_CATEGORIES,
      });
  
      console.log("GraphQL Response:", data); // ✅ Debugging
  
      // ✅ Fix: Extract correct Strapi v4 structure
      categoriesData.value = data.categories?.data?.map(cat => ({
        id: cat.id,
        name: cat.attributes?.name || "No Name",
      })) || [];
  
    } catch (err) {
      console.error("GraphQL Error:", err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  });
  </script>
  
  <style scoped>
  .category-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    transition: 0.3s;
  }
  
  .category-link:hover {
    color: #0056b3;
  }
  </style>
  