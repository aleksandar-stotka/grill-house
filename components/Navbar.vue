<template>
  <nav :class="{'bg-orange-600': isScrolled, 'bg-white': !isScrolled}" class="shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/">
            <img src="../assets/logo.jpg" alt="Savory Bites Logo" class="h-24 rounded-xl">
          </NuxtLink>
          <h2 :class="{'text-white': isScrolled, 'text-orange-600': !isScrolled}" class="text-3xl font-bold ml-4" style="font-family: 'Poppins', sans-serif;">
            kara <span class="text-green-500">House</span>
          </h2>
        </div>
        <div class="hidden md:flex space-x-6 items-center" :class="{'text-white': isScrolled, 'text-gray-900': !isScrolled}" style="font-family: 'Poppins', sans-serif;">
          <NuxtLink v-for="(link, index) in links" :key="index" :to="link.to"
            :class="{
              'hover:text-green-500': isScrolled,
              'hover:text-orange-500': !isScrolled
            }"
            class="px-3 py-2 rounded-md text-xl transition duration-300">
            {{ link.name }}
          </NuxtLink>
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
        <NuxtLink v-for="(link, index) in links" :key="index" :to="link.to"
          :class="{
            'hover:text-green-500': isScrolled,
            'hover:text-orange-500': !isScrolled
          }"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-xl">
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const links = ref([
  { name: 'HOME', to: '/' },
  { name: 'MENU', to: '/ourMenu' },
  { name: 'CONTACT US', to: '/contact' },
  { name: 'ABOUT US', to: '/aboutUs' }
]);

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10; // Change 10 to the scroll position you prefer
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
</style>
