<template>
  <div>
    <!-- Fullscreen Logo Cover -->
    <transition name="fade">
      <div v-if="showLogo" class="logo-overlay">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo-image">
      </div>
    </transition>
    <video autoplay muted loop class="background-video">
      <source src="/public/skara-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gradient-overlay"></div>

   

    <!-- Main Content -->
    <transition name="fade-content">
      <div v-if="!showLogo" class="main-content">
        <Hero />
        <Slider />
        <Ingredients/>
       
       
       
        <About />
        
      
        <Form/>
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

  
 
});
</script>

<style scoped>
/* Fullscreen Background Video */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
}


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

/* Main Content Styling */
.main-content {
  position: relative;
  z-index: 1;
  opacity: 1;
  transition: opacity 1s ease-in;
}

/* Fade Transitions */
.fade-enter-active, .fade-leave-active,
.fade-content-enter-active, .fade-content-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter, .fade-leave-to,
.fade-content-enter, .fade-content-leave-to {
  opacity: 0;
}
</style>