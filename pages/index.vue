<template>
  <div>
    <!-- Fullscreen Logo Cover -->
    <transition name="fade">
      <div v-if="showLogo" class="logo-overlay">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo-image">
      </div>
    </transition>

   

    <!-- Main Content -->
    <transition name="fade-content">
      <div v-if="!showLogo" class="main-content">
        <Hero />
        <About />
        <Ingredients/>
        <Slider />
        
        <Menu />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showLogo = ref(true);

onMounted(() => {
  // Show logo for 2 seconds, then show text
  setTimeout(() => {
    showLogo.value = false;  // Hide logo
  }, 2000);

  
  setTimeout(() => {
    showText.value = false; 
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

/* Fade Transition for Logo and Text */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Fade Transition for Main Content */
.fade-content-enter-active, .fade-content-leave-active {
  transition: opacity 1s ease-out;
}
.fade-content-enter, .fade-content-leave-to {
  opacity: 0;
}

/* Main Content Styling */
.main-content {
  opacity: 1;
  transition: opacity 1s ease-in;
}
</style>
