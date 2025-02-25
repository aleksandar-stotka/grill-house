<template>
  <div v-if="slides.length > 0" class="relative w-full max-w-7xl mx-auto overflow-hidden">
    <div 
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index"
           class="flex-shrink-0 p-6"
           :style="{ flex: `0 0 ${100 / visibleCount}%` }">
        <img :src="getImageUrl(slide.cardimage?.url) || '/path/to/fallback-image.jpg'"
             class="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
             alt="Slide Image">
        <div class="text-center mt-2">
          <h3 class="text-2xl font-bold text-green-700">{{ slide.cardtext }}</h3>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button @click="prev" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-800 text-white p-4 rounded-full shadow-md">
      &#9665;
    </button>
    <button @click="next" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-800 text-white p-4 rounded-full shadow-md">
      &#9655;
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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

// Update visible count based on screen size
const updateVisibleCount = () => {
  visibleCount.value = window.innerWidth < 640 ? 1 : 4;
};

const next = () => {
  if (currentIndex.value < slides.value.length - visibleCount.value) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Reset to avoid empty space
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = slides.value.length - visibleCount.value; // Avoid empty space
  }
};

onMounted(async () => {
  updateVisibleCount();
  try {
    const { data } = await useNuxtApp().$apolloClient.query({ query: GET_SLIDES });
    slides.value = data.sliders;
  } catch (error) {
    console.error("Error fetching slides:", error);
  }
  
  window.addEventListener('resize', updateVisibleCount);
  setInterval(next, 2000);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount);
});
</script>
