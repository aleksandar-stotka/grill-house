<template>
  <div class="flex flex-wrap">
    <!-- First Row -->
    <div class="w-full md:w-1/2 bg-green-500 text-white p-8 flex items-center justify-between">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-3xl font-bold mb-4">Your Heading Here</h1>
        <p class="text-lg mb-4">
          Here is your text description that will appear under the heading.
          This section will be on the left side for larger screens,
          and on top for smaller devices.
        </p>
        <button class="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
          Click Here
        </button>
      </div>
      <div class="md:w-1/2 mt-6 md:mt-0 relative overflow-hidden">
        <img src="/assets/grill.png" alt="Description" class="w-full h-full object-cover transform rotate-45 translate-x-12" />
      </div>
    </div>

    <!-- Second Row -->
    <div class="w-full md:w-1/2 bg-orange-500 text-white p-8 flex items-center justify-between">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-3xl font-bold mb-4">Another Heading</h1>
        <p class="text-lg mb-4">
          This is another text section for the second row. It follows the same structure.
        </p>
        <button class="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
          Learn More
        </button>
      </div>
      <div class="md:w-1/2 mt-6 md:mt-0 relative overflow-hidden">
        <img src="/assets/grill2.png" alt="Description" class="w-full h-full object-cover transform rotate-45 translate-x-12" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveSection',
};
</script>

<style scoped>
</style>
