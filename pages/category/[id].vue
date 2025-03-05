<template>
    <div class="p-6">
      <!-- Categories List -->
      <div class="flex flex-wrap justify-center gap-4 mb-12 mt-12"> <!-- Increased margin -->
        <button
          v-for="category in categories"
          :key="category.documentId"
          @click="navigateToCategory(category.documentId)"
          class="px-4 py-2 border rounded-lg text-sm transition-all duration-300"
          :class="{
            'bg-custom-pink text-white': category.documentId === categoryId,
            'bg-gray-200 hover:bg-gray-300': category.documentId !== categoryId
          }"
        >
          {{ category.name }}
        </button>
      </div>
    
      <!-- Loading & Error Handling -->
      <div v-if="loading" class="loader"></div>
      <div v-else-if="error" class="text-center text-red-500">Error: {{ error.message }}</div>
    
      <!-- Display Filtered Menus -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(menu, index) in filteredMenu"
          :key="index"
          class="relative bg-white border border-black rounded-lg p-6 text-center transition-all duration-300 hover:bg-custom-pink hover:scale-105 hover:h-[310px] h-[300px] group"
        >
          <!-- Image -->
          <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden">
            <img :src="getImageUrl(menu.grillmenuimage.url)" :alt="menu.productname" class="w-full h-full object-cover rounded-full">
          </div>
    
          <!-- Text Content -->
          <div class="mt-14">
            <h2 class="text-2xl font-black transition-colors duration-300 group-hover:text-custom-orange">
              {{ menu.productname }}
            </h2>
            <p class="mt-2 text-gray-600 text-sm transition-colors duration-300 group-hover:text-white">
              {{ menu.grildescription }}
            </p>
            <p class="mt-3 text-lg font-bold transition-colors duration-300 group-hover:text-white">
              ${{ menu.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref, watch, onMounted } from 'vue';
    import { useRoute, useRouter, useNuxtApp } from '#app';
    import { GET_CATEGORIES } from '~/apollo/categories/categoriesQueries';
    import { GET_MEIN_MENU } from '~/apollo/mainMenu/mainMenuQueries';
    import { GET_MENU_BY_CATEGORY } from '~/apollo/comboMenuCategory/comboMenuCategory';
    import { globals } from '#imports';
    
    const apiBaseUrl = globals.apiUrl;
    const route = useRoute();
    const router = useRouter();
    const categoryId = ref(route.params.id || null);
    const categories = ref([]);
    const menu = ref([]);
    const loading = ref(true);
    const error = ref(null);
    
    // Fetch all categories and menus
    onMounted(async () => {
      try {
        const { data: categoryData } = await useNuxtApp().$apolloClient.query({
          query: GET_CATEGORIES,
        });
    
        categories.value = categoryData.categories; // Store all categories
    
        if (categoryId.value) {
          await fetchMenuByCategory(categoryId.value);
        } else {
          await fetchAllMenus(); // Fetch all menus if no category is selected
        }
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });
    
    // Watch for category changes & update menu
    watch(() => route.params.id, async (newId) => {
      categoryId.value = newId;
      loading.value = true;
      
      try {
        if (newId) {
          await fetchMenuByCategory(newId);
        } else {
          await fetchAllMenus(); // Show all menus if no category is selected
        }
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });
    
    // Fetch all menus (when no category is selected)
    const fetchAllMenus = async () => {
      try {
        const { data } = await useNuxtApp().$apolloClient.query({
          query: GET_MEIN_MENU
        });
        menu.value = data.grillmenus;
        filteredMenu.value = data.grillmenus; // Display all menus if no category is selected
      } catch (err) {
        error.value = err;
      }
    };
    
    // Fetch menus by category ID
    const fetchMenuByCategory = async (id) => {
      try {
        const { data } = await useNuxtApp().$apolloClient.query({
          query: GET_MENU_BY_CATEGORY,
          variables: { categoryId: id }
        });
        menu.value = data.grillmenus;
        filteredMenu.value = data.grillmenus; // Filter menus by category
      } catch (err) {
        error.value = err;
      }
    };
    
    // Navigate to a selected category
    const navigateToCategory = (id) => {
      router.push(`/category/${id}`);
    };
    
    // Compute filtered menu based on category
    const filteredMenu = ref([]);
    watch(menu, () => {
      filteredMenu.value = menu.value;
    });
    
    // Helper function for image URL
    const getImageUrl = (path) => {
      return path?.startsWith('http') ? path : `${apiBaseUrl}${path}`;
    };
  </script>
  
  <style scoped>
    @media (max-width: 640px) {
      /* Increase space on small screens */
      .mb-12 {
        margin-bottom: 3rem; /* More space between category and cards */
      }
      .gap-8 {
        gap: 1.5rem; /* More gap between cards */
      }
    }
  
    @media (min-width: 768px) {
      /* Increase space on medium screens */
      .mb-12 {
        margin-bottom: 4rem; /* More space between category and cards */
      }
      .gap-8 {
        gap: 2rem; /* More gap between cards */
      }
    }
  
    @media (min-width: 1024px) {
      /* Increase space on large screens */
      .mb-12 {
        margin-bottom: 5rem; /* More space between category and cards */
      }
      .gap-8 {
        gap: 2.5rem; /* More gap between cards */
      }
    }
  </style>
  