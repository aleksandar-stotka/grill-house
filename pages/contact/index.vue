<template>
    <section class="bg-gray-100 py-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <!-- Google Map Embed -->
          <div class="w-full h-80 md:h-96">
    <iframe 
      class="w-full h-full rounded-lg shadow-md"
      :src="mapUrl"
      allowfullscreen 
      loading="lazy">
    </iframe>
  </div>
  
          <!-- Contact Information -->
          <div class="bg-white p-6 shadow-lg rounded-lg">
            <h2 class="text-2xl font-bold text-green-700">GET IN TOUCH WITH US</h2>
            <p class="mt-2 text-gray-600">
              Give us a call or drop by anytime. We will answer your inquiries within 24 hours on business days.
            </p>
  
            <div class="mt-4">
              <h3 class="font-semibold text-lg">📍 Shop Location:</h3>
              <p class="text-gray-700">17 Beltana Avenue, Bonnyrigg, NSW 2177
              </p>
            </div>
  
            <div class="mt-4">
              <h3 class="font-semibold text-lg">📞 Phone Numbers:</h3>
              <p>
  Call us now: 
  <a href="tel:+61419024034">0419 024 034</a>, 
  <a href="tel:+61405130887">0405 130 887</a>
</p>
            </div>
  
            <div class="mt-4">
              <h3 class="font-semibold text-lg">📧 Email Address:</h3>
              <p class="text-gray-700">skarahouse01@gmail.com</p>
            </div>
            <div class="mt-4">
              <a href="https://www.ubereats.com/au/store/skara-house/e3MKaL3SXpaKDyq3ZbnUJQ?ps=1" class="text-xl hover:text-orange-400"><span class="font-extrabold">          <img src="/assets/uberLogo.svg" alt="Icon 1" class="h-8">
              </span></a>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue';

  const mapUrl = "https://www.google.com/maps/embed?pb=!4v1641234567890!6m8!1m7!1sNCUXQroY3NlTx-6rwWfThg!2m2!1d0!2d0!3f191.33861!4f0!5f0.7820865974627469";


// Generate Google Maps URL dynamically
  </script>
  