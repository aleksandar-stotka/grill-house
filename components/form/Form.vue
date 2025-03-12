<template>
  <div class="bg-cream p-8 flex flex-col md:flex-row gap-6">
    <!-- Customer Support Form -->
    <div class="bg-white p-6 rounded-lg shadow-md flex-1">
      <h2 class="text-xl font-bold text-pink-700 mb-4">CUSTOMER SUPPORT</h2>
      <form @submit.prevent="sendEmail" class="space-y-4">
        <div class="flex gap-4">
          <input type="text" placeholder="First Name" class="input-field" v-model="form.name" required>
          <input type="email" placeholder="Your email" class="input-field" v-model="form.email" required>
        </div>
        <textarea placeholder="Write your message..." class="input-field h-24" v-model="form.message" required></textarea>
        <button type="submit" class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          SUBMIT
        </button>
      </form>
    </div>

    <!-- Contact Info -->
    <div class="bg-white p-6 rounded-lg shadow-md flex-1">
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
  </div>
</template>

<script>
import emailjs from "emailjs-com";

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
  methods: {
    sendEmail() {
      emailjs
        .send(
          "service_9z2627o", // Replace with your Email.js Service ID
          "template_e7dcu8m", // Replace with your Email.js Template ID
          {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          },
          "nbS0nW_kNhiWrfjfW" // Replace with your Email.js Public Key
        )
        .then(() => {
          alert("Email sent successfully!");
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email.");
        });
    }
  }
};
</script>

<style scoped>
.bg-cream { background-color: #fdf6ec; }
.input-field {
  @apply w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500;
}
</style>
