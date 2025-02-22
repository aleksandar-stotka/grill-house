<template>
  <div>
    <!-- Fullscreen Logo Cover -->
    <transition name="fade">
      <div v-if="showLogo" class="logo-overlay">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo-image">
      </div>
    </transition>

    <transition name="fade">
      <div v-if="showText" class="show-text font-bold">
        <span class="orange">Perfectly Grilled</span> <span class="black">Every Time</span>
      </div>
    </transition>

    <!-- Main Content -->
    <div v-show="!showLogo && !showText" class="main-content">
      <Hero />
      <About />
      <Menu/>
      <Slider/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showLogo = ref(true);
const showText = ref(false);

onMounted(() => {
  // Show logo for 2 seconds, then show text
  setTimeout(() => {
    showLogo.value = false;  // Hide logo
    showText.value = true;   // Show text
  }, 2000);

  // After text shows, hide the text after 2 more seconds
  setTimeout(() => {
    showText.value = false; // Hide text after 2 seconds
  }, 4000);
});
</script>

<style scoped>
/* Fullscreen Overlay */
.logo-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Logo Styling */
.logo-image {
  max-width: 50%;
  height: auto;
}

/* Text Styling */
.show-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7vw; /* Make the font size responsive to screen width */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

/* Split color for the text */
.orange {
  color: orange;
}

.black {
  color: black;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Main Content */
.main-content {
  min-height: 100vh;
  background-image: url('@/assets/background.jpg'); /* Adjust background */
  background-size: cover;
  background-position: center;
}
</style>
