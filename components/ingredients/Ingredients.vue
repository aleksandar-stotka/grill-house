<template>
    <div class="flex justify-center">
      <!-- Left Side -->
     
  
      <!-- Center Content -->
      <div class="w-full lg:w-2/4 flex flex-col items-center">
          <h1 class="font-bold text-3xl md:text-3xl lg:text-5xl leading-tight text-center">Best Quality <br> Ingredients</h1>
          <img :src="getImageUrl(ingData[0]?.image?.url)" alt="Ingredient Image" class="w-80 md:w-96 lg:w-[500px] mt-4 rounded-lg" />
          <button class="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 text-lg md:text-2xl tracking-wide mt-4 rounded-lg">VIEW MENU</button>
          <h1 class="font-bold text-2xl md:text-4xl lg:text-5xl mt-6 text-center p-3">Customers Favorite</h1>
      </div>
  
      <!-- Right Side -->
   
    </div>
  </template>
  
  <script setup>
  import { useNuxtApp } from "#imports";
  import { GET_INGREDIANTS } from "~/apollo/mainMenu/ingredientsQueries";
  import { globals } from "#imports";
  import { ref, onMounted } from "vue";
  
  const apiBaseUrl = globals.apiUrl;
  const ingData = ref([]);
  
  onMounted(async () => {
    try {
      const { data } = await useNuxtApp().$apolloClient.query({
        query: GET_INGREDIANTS,
      });
      ingData.value = data.ingredients;
    } catch (err) {
      console.error(err);
    }
  });
  
  const getImageUrl = (path) => {
    return path?.startsWith("http") ? path : `${apiBaseUrl}${path}`;
  };
  </script>
  
  <style>
  </style>