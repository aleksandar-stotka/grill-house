<template>
    <section class="bg-[#fef7f2] py-16 px-6 md:px-12 lg:px-24">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
        <!-- Image Section -->
        <div class="flex justify-center">
          <img src="/assets/roast.png" alt="Burger" class="max-w-full h-auto">
        </div>
  
        <!-- Text Content -->
        <div class="text-center md:text-left">
          <!-- Label -->
          <span class="bg-[#a23c6e] text-white text-xs uppercase font-semibold px-3 py-1 rounded-full">
            About Us
          </span>
  
          <!-- Heading -->
          <h2 class="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Juicy Burgers, <br class="hidden md:block"> Unmatched Flavor
          </h2>
  
          <!-- Description -->
          <p class="mt-4 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur. Sed euismod justo volutpat malesuada. 
            Purus in pellentesque a convallis morbi convallis.
          </p>
  
          <!-- Bullet Points -->
          <ul class="mt-6 space-y-2 md:space-y-0 md:flex md:space-x-6 text-gray-800 font-semibold">
            <li class="flex items-center space-x-2">
              <span class="text-orange-500">•</span> Locally-Sourced Beef
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-orange-500">•</span> Organic Ingredients
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-orange-500">•</span> Sustainable Practices
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-orange-500">•</span> Custom Blend
            </li>
          </ul>
  
          <!-- Button -->
          <div class="mt-6">
            <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Ensures good mobile responsiveness */
  @media (max-width: 768px) {
    .text-container {
      text-align: center;
    }
  }
  </style>
  