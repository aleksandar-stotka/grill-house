<template>
  <section class="py-16 px-6 md:px-12 lg:px-24">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto"
    >
      <!-- Image Section -->
      <!-- Image Section -->
      <img
        src="/assets/about-img-1.png"
        alt="About"
        class="w-full h-auto "
      />

      <!-- Text Content -->
      <div class="text-center md:text-left">
        <!-- Label -->
        <span
          class="bg-[#a23c6e] text-white text-lg uppercase font-semibold px-3 py-1 rounded-full"
        >
          About Us
        </span>

        <!-- Heading -->
      

        <!-- Description -->
        <!-- Description -->
<div class="mt-4 text-white text-2xl
">
  <div>
    <p >
      Skara House is a family-owned food truck
specializing in authentic European barbecue,
bringing traditional flavors to New South
Wales through high-quality, mobile dining.
With years of culinary experience, Skara
House offers an exciting and culturally rich
dining experience that aims to connect
communities through food.
    </p>
  </div>
</div>

     

        <!-- Button -->
        <div class="mt-6">
          <NuxtLink to="/aboutUs"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
  <script setup>










</script>
  
  <style scoped>
/* Ensures good mobile responsiveness */
@media (max-width: 768px) {
  .text-container {
    text-align: center;
  }
}
</style>
  