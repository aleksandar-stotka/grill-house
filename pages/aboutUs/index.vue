<template>
  <section class="relative w-full">
    <!-- Hero Image -->
    <div
      class="w-full h-[250px] md:h-[300px] bg-cover bg-center relative"
      style="background-image: url('about.jpg')"
    >
      <!-- Overlay and Text -->
      <div
        class="w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      >
        <h2
          class="text-3xl md:text-5xl font-extrabold text-green-500 text-left"
        >
          ABOUT US
        </h2>
      </div>
    </div>

    <div class="bg-white py-12 md:py-16 px-4 md:px-20">
      <div
        class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 mt-6"
      >
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 flex justify-center">
        
          <img
            src="/assets/truck.jpg"
            alt="Delicious Ingredients"
            class="w-full max-w-lg lg:max-w-xl rounded-lg shadow-xl"
          />
        </div>

        <!-- Text Content -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <h2 class="text-2xl md:text-4xl font-extrabold text-gray-900">
            JUICY GRILL, UNMATCHED FLAVOR
          </h2>
          <p class="text-gray-600 mt-3 md:mt-4 text-sm md:text-base">
            Founded with a passion for authentic European grilling, Skara House
            blends family recipes and time-honored cooking techniques. With over
            10 years of experience in European grilling, Skara House offers a
            menu that combines bold flavors, high-quality ingredients, and a
            welcoming ambiance, appealing to both local and culturally diverse
            audiences.
          </p>

          <ul
            class="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-gray-700 text-sm md:text-base"
          >
            <li class="flex items-center gap-1 md:gap-2">
              <span class="text-green-500">✔</span> Locally-Sourced Beef
            </li>
            <li class="flex items-center gap-1 md:gap-2">
              <span class="text-green-500">✔</span> Organic Ingredients
            </li>
            <li class="flex items-center gap-1 md:gap-2">
              <span class="text-green-500">✔</span> Sustainable Practices
            </li>
            <li class="flex items-center gap-1 md:gap-2">
              <span class="text-green-500">✔</span> Custom Blend
            </li>
          </ul>
          <!-- Owner Info -->
          <div class="mt-4 md:mt-6 flex items-center gap-3 md:gap-4">
            <img
              src="/assets/family.jpg"
              alt="Owner"
              class="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <div>
              <p class="text-gray-900 font-bold text-sm md:text-base">
                Dimovski Family
              </p>
              <p class="text-pink-600 text-xs md:text-sm">CEO - Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


// Fetch data from GraphQL server using Apollo Client

</script>

<style scoped>
/* Add any custom styling if needed */
</style>
