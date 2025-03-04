<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Category: {{ categoryData?.name }}</h1>
  
      <p v-if="loading">Loading category...</p>
      <p v-else-if="error" class="text-red-500">Error loading category</p>
  
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(burger, index) in categoryData?.grillmenus" 
            :key="index"
            class="relative bg-white border border-black rounded-lg p-6 text-center transition-all duration-300 hover:bg-custom-pink hover:scale-105 hover:h-[310px] h-[300px] group"
          >
            <!-- Burger Image -->
            <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden">
              <img :src="getImageUrl(burger.grillmenuimage.url)" :alt="burger.productname" class="w-full h-full object-cover rounded-full">
            </div>
  
            <!-- Product Info -->
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
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import { useNuxtApp } from '#app';
  import { globals } from '#imports';
  import { gql } from 'graphql-tag';
  
  // Get category ID from route
  const route = useRoute();
  const categoryId = route.params.id;
  const categoryData = ref(null);  // Initialize as null or an empty object
  
  // GraphQL query to fetch a category with related grill menus
  const GET_CATEGORY_WITH_MENU = gql`
    query GetCategory($id: ID!) {
      category(id: $id) {
        id
        name
        grillmenus {
          id
          productname
          grildescription
          price
          grillmenuimage {
            url
          }
        }
      }
    }
  `;
  
  // Fetch category data
  /*const { loading, error, data } = useNuxtApp().$apolloClient.query(GET_CATEGORY_WITH_MENU, { id: categoryId });
  
  onMounted(async () => {
    try {
      const { data } = await data;
      categoryData.value = data.category;
      console.log(categoryData.value, "category data");
    } catch (err) {
      console.error("Error fetching category data:", err);
    }
  });
  
  // Image URL helper
  const getImageUrl = (path) => {
    return path?.startsWith('http') ? path : `${globals.apiUrl}${path}`;
  };*/
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  