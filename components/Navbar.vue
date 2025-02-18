<template>
  <nav class="bg-white-300 text-white py-4 px-6 flex items-center justify-between">
    <!-- Left-Side Logo -->
    <div class="flex items-center">
      <img src="../assets/logo.jpg" alt="Savory Bites Logo" class="h-20 rounded-xl ">
      <h2 class="text-orange-500 p-2 text-2xl font-bold" style="font-family: 'Courier New', Courier, monospace;">
  Skara <span class="text-green-500">House</span>
</h2>
    </div>

    <!-- Centered Navigation Links -->
    <ul class="hidden md:flex space-x-6 mx-auto text-black">
      <li><a href="#" class="hover:text-orange-400">HOME</a></li>
      <li><a href="#" class="hover:text-orange-400">SHOP</a></li>
      <li><a href="#" class="hover:text-orange-400">MENU</a></li>
      <li><a href="#" class="hover:text-orange-400">PAGES</a></li>
      <li><a href="#" class="hover:text-orange-400">CONTACT US</a></li>
    </ul>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden text-black">
      ☰
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div v-if="isMenuOpen" class="md:hidden bg-gray-900 text-white p-4 space-y-2 text-center">
    <a href="#" class="block hover:text-orange-400">HOME</a>
    <a href="#" class="block hover:text-orange-400">SHOP</a>
    <a href="#" class="block hover:text-orange-400">MENU</a>
    <a href="#" class="block hover:text-orange-400">PAGES</a>
    <a href="#" class="block hover:text-orange-400">CONTACT US</a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
