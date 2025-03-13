<template>
  <div class="bg-cream p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Contact Info -->
    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col">
      <h2 class="text-xl font-bold text-green-700 mb-4">GET IN TOUCH WITH US</h2>
      <p class="text-gray-600 mb-4">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours.</p>
      <div class="space-y-3">
        <p><strong>Shop Location:</strong><br>17 Beltana Avenue, Bonnyrigg, NSW 2177</p>
        <p>
          Call us now: 
          <a href="tel:0419 024 034">0419 024 034</a>, 
          <a href="tel:0405 130 887">0405 130 887</a>
        </p>
        <p><strong>Email Address:</strong><br>skarahouse01@gmail.com</p>
      </div>
    </div>

    <!-- Google Map -->
    <div class="w-full h-80 md:h-auto">
      <iframe 
        class="w-full h-full rounded-lg shadow-md"
        :src="mapUrl"
        allowfullscreen 
        loading="lazy">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapUrl: "https://www.google.com/maps/embed?pb=!4v1641234567890!6m8!1m7!1sNCUXQroY3NlTx-6rwWfThg!2m2!1d0!2d0!3f191.33861!4f0!5f0.7820865974627469"
    };
  }
};
</script>

<style scoped>
.bg-cream { background-color: #fdf6ec; }
</style>