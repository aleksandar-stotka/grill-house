<template>
  <nav>
    <MenuHeader/>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <img src="../assets/logo.jpg" alt="Savory Bites Logo" class="h-20 rounded-xl">
          <h2 class="text-orange-500 p-2 text-2xl font-bold" style="font-family: 'Poppins', sans-serif;">
            Skara <span class="text-green-500">House</span>
          </h2>
        </div>
        <div class="hidden md:flex space-x-6 items-center text-black font-semibold" style="font-family: 'Poppins', sans-serif;">
          <a v-for="(link, index) in links" :key="index" :href="link.href" 
            :class="{'text-orange-500': activeLink === link.name, 'hover:text-orange-400': activeLink !== link.name}"
            @click="setActiveLink(link.name)"
            class="px-3 py-2 rounded-md text-lg">
            {{ link.name }}
          </a>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-black focus:outline-none">
            <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-md">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="(link, index) in links" :key="index" :href="link.href" 
          :class="{'text-orange-500': activeLink === link.name, 'hover:text-orange-400': activeLink !== link.name}"
          @click="setActiveLink(link.name); isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-lg">
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
  { name: 'HOME', href: '#' },
  { name: 'SHOP', href: '#' },
  { name: 'MENU', href: '#' },
  { name: 'PAGES', href: '#' },
  { name: 'CONTACT US', href: '#' }
]);

const activeLink = ref('HOME');
const isMobileMenuOpen = ref(false);

const setActiveLink = (name) => {
  activeLink.value = name;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
</style>
