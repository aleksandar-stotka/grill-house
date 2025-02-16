<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full transition-all duration-300 p-4 shadow-md flex items-center',
      isScrolled ? 'bg-white h-12 w-4/5 mx-auto rounded-lg' : 'bg-gray-100 h-16 w-full'
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Brand Logo -->
      <a href="#" class="font-bold">
        <img
          src="@/assets/logo.jpg"
          alt="logo"
          :class="isScrolled ? 'w-12 h-auto' : 'w-16 h-auto'"
        />
      </a>

      <!-- Hamburger Button (Mobile) -->
      <button
        @click="toggleMenu"
        class="lg:hidden text-gray-900 focus:outline-none"
      >
        <span class="block w-6 h-0.5 bg-gray-900 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-900 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-900"></span>
      </button>

      <!-- Menu -->
      <div
        :class="{ 'block': isActive, 'hidden': !isActive }"
        class="absolute top-16 right-4 bg-white w-48 p-4 shadow-lg lg:block lg:static lg:w-auto lg:p-0 lg:shadow-none"
      >
        <ul class="flex flex-col lg:flex-row lg:space-x-6">
          <li>
            <a href="#" class="block px-4 py-2 text-gray-900 hover:text-blue-500">Home</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isActive = ref(false);
const isScrolled = ref(false);

// Toggle mobile menu
const toggleMenu = () => {
  isActive.value = !isActive.value;
};

// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Listen to scroll events
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Smooth transition effect */
nav {
  transition: all 0.3s ease-in-out;
}
</style>
