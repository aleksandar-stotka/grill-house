<template>
  <div class="flex flex-wrap">
    <!-- First Row -->
    <div class="w-full md:w-1/2 bg-green-500 text-white p-8 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-3xl font-bold mb-4">{{ menusData[0]?.menutext }}</h1>
        <p class="text-lg mb-4">
          {{ menusData[0]?.menudescription }}
        </p>
        <button class="bg-black text-white py-1 px-4 md:py-2 md:px-6 text-sm md:text-base rounded-md hover:bg-gray-800">
          Click Here
        </button>
      </div>
      <div class="md:w-1/2 mt-6 md:mt-0">
        <img :src="getImageUrl(menusData[0]?.menuimage?.url)" alt="menuimage" class="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>

    <!-- Second Row -->
    <div class="w-full md:w-1/2 bg-orange-500 text-white p-8 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-3xl font-bold mb-4">{{ menusData[1]?.menutext }}</h1>
        <p class="text-lg mb-4">
          {{ menusData[1]?.menudescription }}
        </p>
        <button class="bg-black text-white py-1 px-4 md:py-2 md:px-6 text-sm md:text-base rounded-md hover:bg-gray-800">
          Learn More
        </button>
      </div>
      <div class="md:w-1/2 mt-6 md:mt-0">
        <img :src="getImageUrl(menusData[1]?.menuimage?.url)" alt="menuimage" class="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
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

<style scoped>
</style>