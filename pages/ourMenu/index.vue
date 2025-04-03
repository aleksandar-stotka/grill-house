<template>
  <div class="bg-black text-white min-h-screen p-10">
    <!-- Header -->
    <div class="text-center text-orange-600 text-5xl font-extrabold tracking-wide uppercase">
      SKARA<span class="block text-red-700">HOUSE</span>
    </div>
    <div class="text-right text-white text-sm mt-2">OPEN 11AM - 9PM <br> WE CATER!</div>
    
    <!-- Menu Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div v-for="(item, index) in menu" :key="index" class="relative bg-gray-900 border border-orange-600 rounded-lg p-6 text-center transition-all duration-300 hover:bg-orange-700 hover:scale-105 group">
        <!-- Item Image -->
        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover rounded-full border-4 border-orange-600">
        </div>

        <!-- Text Content -->
        <div class="mt-14">
          <h2 class="text-2xl font-black text-orange-500 transition-colors duration-300 group-hover:text-white uppercase">
            {{ item.title }}
          </h2>
          <p v-if="item.desk || item.desc" class="mt-2 text-white-300 text-sm transition-colors duration-300 group-hover:text-white">
            {{ item.desk || item.desc }}
          </p>
          <p class="mt-3 text-lg font-bold text-orange-500 transition-colors duration-300 group-hover:text-white">
            ${{ item.price }}
          </p>
        </div>
      </div>    
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { menu } from '~/data/data';


const menuData = ref(menu);
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
</style>
