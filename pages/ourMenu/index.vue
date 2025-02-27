<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    <div 
      v-for="(burger, index) in burgers" 
      :key="index"
      class="relative bg-white border border-black rounded-lg p-6 text-center transition-all duration-300 hover:bg-custom-pink  hover:scale-105 hover:h-[310px] h-[300px] group"
    >
      <!-- Burger Image (slightly outside the card, no visible border) -->
      <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden">
        <img :src="burger.image" :alt="burger.name" class="w-full h-full object-cover rounded-full">
      </div>

      <!-- Text Content -->
      <div class="mt-14">
        <h2 class="text-2xl font-black transition-colors duration-300 group-hover:text-custom-orange">
          {{ burger.name }}
        </h2>
        <p class="mt-2 text-gray-600 text-sm transition-colors duration-300 group-hover:text-white">
          {{ burger.description }}
        </p>
        <p class="mt-3 text-lg font-bold transition-colors duration-300 group-hover:text-white">
          ${{ burger.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import grillImage from '~/assets/grill.png'; // Update with actual image paths

const burgers = [
  {
    name: "BURGER WITH BACON",
    description: "Bread, 120g Meat, Cheese, BBQ Sauce, Bacon, Lettuce, Pickles, Red Onion.",
    price: 10.99,
    image: grillImage
  },
  {
    name: "CRUNCH GRILLHOUSE",
    description: "Bread, 120g Meat, Cheese, BBQ Sauce, Lettuce, Pickles, Red Onion.",
    price: 12.99,
    image: grillImage
  },
  {
    name: "SIZZLE SNAP BURGER",
    description: "Bread, 120g Meat, Cheese, BBQ Sauce, Lettuce, Pickles, Red Onion.",
    price: 16.99,
    image: grillImage
  }
];
</script>
