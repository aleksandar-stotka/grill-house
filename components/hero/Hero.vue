<template>
  <section class="relative grid place-items-center gap-8 p-6 md:p-12">
    <!-- Text Content -->
    <div class="relative z-10 text-center">
      <h1 class="text-3xl md:text-5xl font-extrabold text-white mt-12 p-4">
        Delight in Every Bite <br />
        at
        <span class="text-orange-500">Skara House</span>
      </h1>

      <!-- Ingredients Icons in a Row -->
      <div class="mt-6">
        <div class="flex flex-row gap-5 p-1 justify-center">
          <a
            href="https://www.ubereats.com/au/store/skara-house/e3MKaL3SXpaKDyq3ZbnUJQ?ps=1"
            class="text-lg md:text-xl hover:text-orange-400"
          >
            <span class="font-extrabold">
              <img
                src="/assets/uberLogo.svg"
                alt="Uber Logo"
                class="h-8 md:h-8"
              />
            </span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61573204824323"
            class="text-xl md:text-2xl text-white hover:text-orange-400"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/skara.house/"
            class="text-xl md:text-2xl text-white hover:text-orange-400"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.tiktok.com/@skara_house?_t=ZS-8uCt8PVYwSX&_r=1"
            class="text-xl md:text-2xl text-white hover:text-orange-400"
          >
            <i class="fab fa-tiktok"></i>
          </a>
        </div>

        <div class="mt-6 flex flex-row items-center space-x-4 justify-center">
          <div class="bg-white p-2 rounded-md">
            <img src="/assets/bbq.png" alt="Icon 1" class="h-4 md:h-4" />
          </div>
          <div class="bg-white p-2 rounded-md">
            <img src="/assets/grill.png" alt="Icon 2" class="h-4 md:h-4" />
          </div>
          <div class="bg-white p-2 rounded-md">
            <img src="/assets/grill2.png" alt="Icon 3" class="h-4 md:h-4" />
          </div>
        </div>
      </div>
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

/* Styles to ensure everything is centered */
section {
  display: grid;
  place-items: center; /* Center content both horizontally and vertically */
}

@media (max-width: 768px) {
  section {
    grid-template-columns: 1fr;
  }
  .relative {
    margin-top: 3rem; /* Added margin-top for mobile screens to move the text lower */
  }
  h1 {
    font-size: 2rem; /* Slightly increased the font-size for mobile */
  }
}

@media (min-width: 1024px) {
  section {
    grid-template-columns: 1fr;
  }
}
</style>
