<template>
  <div>
    <!-- 🌄 Fullscreen Hero Background -->
    <div
      v-if="heroes.length"
      class="hero-background"
      :style="{ backgroundImage: `url(${getImageUrl(heroes[0].heroImage?.url)})` }"
    ></div>

    <!-- 🏠 Navbar (Always on Top) -->
    <nav
      :class="[
        'fixed top-0 left-0 w-full transition-all duration-300 p-4 shadow-md flex items-center z-50',
        isScrolled ? 'bg-white h-12 w-4/5 mx-auto rounded-lg' : 'bg-gray-200 h-16 w-full'
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
          v-show="isActive"
          class="absolute top-16 right-4 bg-white w-48 p-4 shadow-lg lg:block lg:static lg:w-auto lg:p-0 lg:shadow-none"
        >
          <ul class="flex flex-col lg:flex-row lg:space-x-6">
            <li>
              <a href="#" class="block px-4 py-2 text-gray-900 hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-gray-900 hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-gray-900 hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 📜 Main Content -->
    <div class="relative z-10 pt-24 px-6 md:px-12 lg:px-24">
      <h1 class="text-4xl font-extrabold text-gray-900 text-center">Hero Section</h1>

      <div v-if="loading" class="flex justify-center mt-8">
        <div class="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>

      <div v-if="heroes.length" class="hero mt-8 text-center">
        <h2 class="text-2xl font-semibold">{{ heroes[0].Grll }}</h2>
      </div>

      <p v-else class="text-center text-gray-700 mt-4">No heroes found</p>
      <p v-if="error" class="text-red-500 text-center mt-2">Error: {{ error }}</p>

      <!-- 📌 Extra Content -->
      <div class="extra-content mt-16 p-8 bg-white shadow-md rounded-lg">
        <p class="text-lg text-gray-800 text-center">
          Scroll down and see how the hero image stays in the background.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';
import { GET_HERO } from '~/apollo/heroQueries';
import { globals } from '~/utils/globals';

const heroes = ref([]);
const error = ref(null);
const loading = ref(true);
const isActive = ref(false);
const isScrolled = ref(false);

// Use the global API URL
const apiBaseUrl = globals.apiUrl;

// Fetch data from GraphQL server using Apollo Client
onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_HERO
    });
    heroes.value = data.heroes;
    loading.value = false;
  } catch (err) {
    error.value = err;
    console.error('GraphQL Error:', error.value);
  }
});

// Helper function to construct image URLs safely
const getImageUrl = (path) => {
  return path?.startsWith('http') ? path : `${apiBaseUrl}${path}`;
};

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
/* 🌄 Hero Background Image */
.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -10; /* Push behind everything */
}

/* Navbar shadow effect */
nav {
  transition: all 0.3s ease-in-out;
}
</style>
