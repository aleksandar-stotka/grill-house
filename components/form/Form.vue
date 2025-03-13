<template>
  <div class="bg-cream p-8 flex justify-center items-center min-h-screen">
    <!-- Slightly Bigger Centered Form -->
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h2 class="text-2xl font-bold text-pink-700 mb-6 text-center">CUSTOMER SUPPORT</h2>
      <form @submit.prevent="sendEmail" class="space-y-5">
        <div class="flex flex-col gap-5">
          <input type="text" placeholder="First Name" class="input-field" v-model="form.name" required>
          <input type="email" placeholder="Your email" class="input-field" v-model="form.email" required>
        </div>
        <textarea placeholder="Write your message..." class="input-field h-28" v-model="form.message" required></textarea>
        <button type="submit" class="bg-orange-500 text-white w-full px-5 py-3 rounded-md text-lg hover:bg-orange-600">
          SUBMIT
        </button>
      </form>
      
      <!-- Centered View More Button with Padding -->
      <div class="flex justify-center mt-4">
        <NuxtLink 
          to="/contact" 
          class="px-6 py-3 text-white bg-green-600 rounded-lg shadow-md 
                 hover:bg-green-700 transition duration-300 ease-in-out 
                 text-lg font-semibold tracking-wide inline-block"
        >
          VIEW MORE
        </NuxtLink>
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
  @apply w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg;
}
</style>