<template>
  <section
    class="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 md:p-12"
  >
    <!-- Text Content -->
    <div class="relative z-10 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white">
        Delight in Every Bite <br />
        at
        <span class="text-orange-500">Skara House</span>
      </h1>

      <!-- Iterate over the description (structured text) -->

      <div
        class="mt-6 flex items-center space-x-4 justify-center md:justify-start"
      >
        <!-- Ingredients Icons -->
        <div class="flex space-x-2">
          <div class="bg-white p-2 rounded-md">
            <img src="/assets/bbq.png" alt="Icon 1" class="h-8" />
          </div>
          <div class="bg-white p-2 rounded-md">
            <img src="/assets/grill.png" alt="Icon 2" class="h-8" />
          </div>
          <div class="bg-white p-2 rounded-md">
            <img src="/assets/grill2.png" alt="Icon 3" class="h-8" />
          </div>
        </div>
      </div>

      <div class="flex space-x-4 mt-4">
        <a
          href="https://www.ubereats.com/au/store/skara-house/e3MKaL3SXpaKDyq3ZbnUJQ?ps=1"
          class="text-xl hover:text-orange-400"
        >
          <span class="font-extrabold">
            <img src="/assets/uberLogo.svg" alt="Uber Logo" class="h-16" />
            <!-- Increased size -->
          </span>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61573204824323"
          class="text-3xl text-white hover:text-orange-400"
        >
          <i class="fab fa-facebook-f"></i>
        </a>

        <a
          href="https://www.instagram.com/skara.house/"
          class="text-3xl text-white hover:text-orange-400"
        >
          <i class="fab fa-instagram"></i>
        </a>

        <a
          href="https://www.tiktok.com/@skara_house?_t=ZS-8uCt8PVYwSX&_r=1"
          class="text-3xl text-white hover:text-orange-400"
        >
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
    </div>

    <!-- Photo (on right side for larger screens) -->
    <div>
      <img
        src="/public/main-hero.jpg"
        alt="Hero Image"
        class="w-full max-w-[450px] h-auto rounded-lg shadow-lg md:max-w-[500px]"
      />
    </div>
  </section>
</template>

<script setup>



// Use the global API URL
const apiBaseUrl = globals.apiUrl;

// Fetch data from GraphQL server using Apollo Client


// Helper function to construct image URLs safely

</script>

<style scoped>
/* background */

/* Styles to ensure the photo is on the right */
@media (max-width: 768px) {
  /* On small screens, the layout will be stacked, text on top and image below */
  section {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1024px) {
  /* On larger screens, the text is on the left, and image is on the right */
  section {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
