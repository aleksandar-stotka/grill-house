<template>
  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div class="relative flex justify-center">
        <img
          src="/public/menu-main-2.jpg.webp"
          alt="Delicious Ingredients"
          class="w-full max-w-lg lg:max-w-xl rounded-lg shadow-xl"
        />
      </div>
      <!-- Left Side Text Content -->
      <div class="space-y-6 text-center lg:text-left">
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
          Best Quality <br />
          <span class="text-green-600">Ingredients</span>
        </h1>
        <p class="text-gray-600 text-lg">
          We use only the freshest and highest-quality ingredients to craft our delicious meals.
        </p>
        <!-- View Menu Button -->
        <NuxtLink
          to="/ourMenu"
          class="bg-green-600 hover:bg-green-700 text-white py-4 px-8 text-lg font-semibold rounded-lg shadow-lg inline-block transition-all duration-300 transform"
          :class="{ 'scale-110': isVisible }"
        >
          VIEW MENU
        </NuxtLink>
      </div>

      <!-- Right Side Hero Image -->
     
    </div>

    <!-- Features Section (Like in Screenshot) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-center">
      <div class="space-y-3">
        <h3 class="text-orange-600 font-bold text-xl">ARTISAN BUNS</h3>
        <p class="text-gray-600">Available Gluten-Free <br /> Made Locally</p>
      </div>
      <div class="space-y-3">
        <h3 class="text-green-600 font-bold text-xl">GROUND BEEF</h3>
        <p class="text-gray-600">Signature Blended Beef <br /> Never Frozen</p>
      </div>
      <div class="space-y-3">
        <h3 class="text-green-500 font-bold text-xl">FRESH PRODUCE</h3>
        <p class="text-gray-600">Made Fresh Everyday <br /> Hand-Tossed</p>
      </div>
      <div class="space-y-3">
        <h3 class="text-red-600 font-bold text-xl">GROUND MACEDONIAN</h3>
        <p class="text-gray-600">Ground Fresh <br /> traditional macedonian recipe</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        setTimeout(() => {
          isVisible.value = false;
        }, 1000);
      }
    },
    { threshold: 0.5 }
  );

  const section = document.querySelector('.max-w-7xl');
  if (section) observer.observe(section);

  onUnmounted(() => {
    if (section) observer.unobserve(section);
  });
});
</script>

<style scoped>
.scale-110 {
  transform: scale(1.1);
}
</style>
