<template>
  <div  class="relative w-full max-w-7xl mx-auto overflow-hidden">
    <h1 class="text-2xl" >Customer Favorites</h1>
    <div 
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }"
    >
      <!-- Loop through slides -->
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="flex-shrink-0 p-6"
        :style="{ flex: `0 0 ${100 / visibleCount}%` }"
      >
        <img :src="slide.image"
             class="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
             alt="Slide Image">
        <div class="text-center mt-2">
          <h3 class="text-2xl font-bold text-green-700">{{ slide.title }}</h3>
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
import { menu } from '~/data/data';

// Use local data from data.js
const slides = ref(menu);
const currentIndex = ref(0);
const visibleCount = ref(4);

// Function to update the number of visible slides based on screen width
const updateVisibleCount = () => {
  visibleCount.value = window.innerWidth < 640 ? 1 : 4;
};

// Move to the next slide
const next = () => {
  if (currentIndex.value < slides.value.length - visibleCount.value) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Reset to the beginning to avoid empty space
  }
};

// Move to the previous slide
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = slides.value.length - visibleCount.value; // Jump to the last set of slides
  }
};

onMounted(() => {
  updateVisibleCount();
  window.addEventListener('resize', updateVisibleCount);
  // Auto-advance the slider every 2 seconds
  const intervalId = setInterval(next, 2000);

  // Cleanup the interval on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleCount);
    clearInterval(intervalId);
  });
});
</script>
