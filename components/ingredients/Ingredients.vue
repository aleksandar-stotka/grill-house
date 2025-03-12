<template>
  <div ref="sectionRef" class="flex justify-center p-5">
    <!-- Left Side -->
    <div class="w-full lg:w-2/4 flex flex-col items-center">
      <h1 class="font-bold text-3xl md:text-3xl lg:text-5xl leading-tight text-center">
        Best Quality <br />
        Ingredients
      </h1>

      <!-- Image or Video Handling -->
      <div v-if="ingData[0]?.image?.url">
        <img
          :src="getImageUrl(ingData[0]?.image?.url)"
          alt="Ingredient Image"
          class="w-80 md:w-96 lg:w-[500px] mt-4 rounded-lg"
        />
      </div>

      <!-- View Menu Button with Scroll Effect -->
      <NuxtLink
  to="/ourMenu"
  class="bg-green-500 text-white py-4 px-10 md:py-5 md:px-12 text-lg md:text-2xl 
         font-semibold rounded-lg shadow-lg transition-transform duration-1000 flex items-center space-x-3"
  :class="{ 'scale-150': isVisible }"
>
  <i class="fas fa-utensils"></i> 
  <span>VIEW MENU</span>
</NuxtLink>



      <!-- Favorite Heading -->
      <h1 class="font-bold text-2xl md:text-4xl lg:text-5xl mt-6 text-center p-3">
        Customers Favorite
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from "#imports";
import { GET_INGREDIANTS } from "~/apollo/mainMenu/ingredientsQueries";
import { globals } from "#imports";

const apiBaseUrl = globals.apiUrl;
const ingData = ref([]);
const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$apolloClient.query({
      query: GET_INGREDIANTS,
    });
    ingData.value = data.ingredients;
  } catch (err) {
    console.error(err);
  }

  // Observe scrolling into view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      setTimeout(() => { isVisible.value = false; }, 1000); // Reset after 1 sec
    }
  }, { threshold: 0.5 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    if (sectionRef.value) observer.unobserve(sectionRef.value);
  });
});

const getImageUrl = (path) => {
  return path?.startsWith("http") ? path : `${apiBaseUrl}${path}`;
};
</script>

<style scoped>
.scale-125 {
  transform: scale(1.25);
}
</style>