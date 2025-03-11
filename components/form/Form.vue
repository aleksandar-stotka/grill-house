<template>
  <div class="bg-cream p-8 flex flex-col md:flex-row gap-6">
    <!-- Customer Support Form -->
    <div class="bg-white p-6 rounded-lg shadow-md flex-1">
      <h2 class="text-xl font-bold text-pink-700 mb-4">CUSTOMER SUPPORT</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="flex gap-4">
          <input type="text" placeholder="First Name" class="input-field" v-model="form.name" required>
          <input type="email" placeholder="Your email" class="input-field" v-model="form.email" required>
        </div>
        <textarea placeholder="Write your message..." class="input-field h-24" v-model="form.message" required></textarea>
        <button type="submit" class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">SUBMIT</button>
      </form>
    </div>
    
    <!-- Contact Info -->
    <div class="bg-white p-6 rounded-lg shadow-md flex-1">
      <h2 class="text-xl font-bold text-green-700 mb-4">GET IN TOUCH WITH US</h2>
      <p class="text-gray-600 mb-4">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours.</p>
      <div class="space-y-3">
        <p><strong>Shop Location:</strong><br> 808 Vale Street Bay Magna</p>
        <p><strong>Phone Number:</strong><br> +001 123 456 789, +002 321 654 987</p>
        <p><strong>Email Address:</strong><br> exampleinfo@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  
};
</script>

<style scoped>
.bg-cream { background-color: #fdf6ec; }
.input-field {
  @apply w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500;
}
</style>
