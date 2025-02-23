<template>
    <div class="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div class="flex transition-transform duration-300 ease-in-out"
           :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }">
        <div v-for="(photo, index) in photos" :key="index" 
             :class="`flex-shrink-0 p-6 ${imageWidth}`">
          <img :src="photo" class="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg" alt="Slider Image">
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
  
  <script>
  
  export default {
    data() {
      return {
        photos: [
          'https://via.placeholder.com/600?text=1',
          'https://via.placeholder.com/600?text=2',
          'https://via.placeholder.com/600?text=3',
          'https://via.placeholder.com/600?text=4',
          'https://via.placeholder.com/600?text=5',
          'https://via.placeholder.com/600?text=6',
          'https://via.placeholder.com/600?text=7',
          'https://via.placeholder.com/600?text=8',
          'https://via.placeholder.com/600?text=9',
        ],
        currentIndex: 0,
        visibleCount: window.innerWidth < 640 ? 1 : 4
      };
    },
    computed: {
      maxIndex() {
        return Math.ceil(this.photos.length / this.visibleCount) - 1;
      },
      imageWidth() {
        return this.visibleCount === 1 ? 'w-full' : 'w-1/4';
      }
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex < this.maxIndex) ? this.currentIndex + 1 : 0;
      },
      prev() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.maxIndex;
      },
      updateVisibleCount() {
        this.visibleCount = window.innerWidth < 640 ? 1 : 4;
      }
    },
    mounted() {
      this.updateVisibleCount();
      window.addEventListener('resize', this.updateVisibleCount);
      setInterval(this.next, 2000);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateVisibleCount);
    }
  };
  </script>
  
  <style scoped>
  </style>
  