<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Brand -->
      <a href="#" class="text-xl font-bold">MyBrand</a>
      
      <!-- Hamburger Button -->
      <button @click="toggleMenu" class="lg:hidden text-white focus:outline-none">
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </button>
      
      <!-- Menu -->
      <div :class="{'block': isActive, 'hidden': !isActive}" class="absolute top-16 right-4 bg-gray-800 w-48 p-4 shadow-lg lg:block lg:static lg:w-auto lg:p-0 lg:shadow-none">
        <ul class="flex flex-col lg:flex-row lg:space-x-6">
          <li><a href="#" class="blsock px-4 py-2 hover:bg-gray-700 rounded">Home</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-700 rounded">About</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-700 rounded">Services</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-700 rounded">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template> 

<script setup>
import { ref } from 'vue';
const isActive = ref(false);
const toggleMenu = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .hidden {
    display: block !important;
  }
}
</style>
