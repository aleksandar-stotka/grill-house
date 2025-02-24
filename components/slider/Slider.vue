<template>
    <div class="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div class="flex transition-transform duration-300 ease-in-out"
           :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }">
        <div v-for="(slide, index) in slides" :key="index"
             :class="`flex-shrink-0 p-6 ${imageWidth}`">
          <img :src="getImageUrl(slide.cardimage?.url) || '/path/to/fallback-image.jpg'"
               class="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
               alt="Slide Image">
          <div class="text-center mt-2">
            <h3 class="text-2xl font-bold text-green-700">{{ slide.cardtext }}</h3>
          </div>
        </div>
      </div>
  
      <button @click="prev" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-800 text-white p-4 rounded-full shadow-md">
        &#9665;
      </button>
      <button @click="next" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-800 text-white p-4 rounded-full shadow-md">
        &#9655;
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { useNuxtApp } from '#imports';
  import { GET_SLIDES } from '~/apollo/slidermenu/sliderQueries';
  import { globals } from '#imports';
  
  const slides = ref([]);
  const currentIndex = ref(0);
  const visibleCount = ref(4);
  const apiBaseUrl = globals.apiUrl;
  
  const getImageUrl = (path) => {
    return path?.startsWith('http') ? path : `${apiBaseUrl}${path}`;
  };
  
  // Dynamically calculate image width based on visible count and screen size
  const imageWidth = computed(() => {
    if (window.innerWidth < 640) {
      return 'w-full';  // Full width on mobile screens
    }
    return `w-${Math.floor(100 / visibleCount.value)}%`;  // Adjust based on visible count
  });
  
  const updateVisibleCount = () => {
    visibleCount.value = window.innerWidth < 640 ? 1 : 4;
  };
  
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  };
  
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  };
  
  onMounted(async () => {
    try {
      const { data } = await useNuxtApp().$apolloClient.query({ query: GET_SLIDES });
      slides.value = data.sliders;
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    setInterval(next, 2000);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleCount);
  });
  </script>
  
  <style scoped>
  </style>
  