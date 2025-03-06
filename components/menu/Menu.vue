<template>
  <div class="flex flex-col items-center p-8 bg-green-500 text-white text-center">
    <h1 class="text-3xl font-bold mb-4">{{ menusData[0]?.menutext }}</h1>
    <p class="text-lg mb-4">{{ menusData[0]?.menudescription }}</p>
    <img :src="getImageUrl(menusData[0]?.menuimage?.url)" alt="menuimage" 
         class="w-full max-w-md h-auto object-cover rounded-lg mb-4" />
    <NuxtLink :to="`/category/${id}`" 
              class="bg-black text-white font-extrabold py-2 px-6 text-base rounded-md hover:bg-gray-800">
      VIEW
    </NuxtLink>
  </div>
</template>

<script setup>
import { globals } from "#imports";
import { onMounted, ref } from "#imports";
import { useNuxtApp } from "#imports";
import { GET_MENU } from "~/apollo/menu/menuQueries";

const apiBaseUrl = globals.apiUrl;
const menusData = ref([]);

onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_MENU,
    });
    menusData.value = data.menus;
  } catch (err) {
    console.error("Error fetching menu data:", err);
  }
});

const getImageUrl = (path) => {
  return path?.startsWith("http") ? path : `${apiBaseUrl}${path}`;
};
</script>