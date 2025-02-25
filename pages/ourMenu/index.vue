<template>
  <div class="container mx-auto p-4">
    <h2 class="text-center text-3xl font-bold mb-4">Our Menu</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(item, index) in menuItems" :key="index" class="flex items-center gap-4 border-b pb-4">
        <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded" />
        <div class="flex-1">
          <div class="flex justify-between items-center">
            <h3 class="text-2xl font-extrabold  text-pink-700">{{ item.name }}</h3>
            <span class="text-green-600 font-bold">${{ item.price }}</span>
          </div>
          <p class="text-gray-600 text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Sand Wiches", price: 36, description: "Delicious sandwiches with fresh ingredients.", image: "/assets/roast.png" },
        { name: "Snap Burgers", price: 38, description: "Juicy and flavorful burgers.", image: "burger.jpg" },
        { name: "Cheese Burger", price: 32, description: "Classic cheeseburger with melty cheese.", image: "cheeseburger.jpg" },
        { name: "Burger with Bacon", price: 11, description: "Smoky bacon paired with a juicy patty.", image: "baconburger.jpg" },
        { name: "Sizzle Snap Burgers", price: 17, description: "A spicy twist on the classic burger.", image: "spicyburger.jpg" },
        { name: "Grill House", price: 32, description: "Grilled delights fresh off the flame.", image: "grillhouse.jpg" },
        { name: "Hot Dogs", price: 29, description: "Classic hot dogs with gourmet toppings.", image: "hotdog.jpg" },
        { name: "Petti Burger", price: 11, description: "Mini burgers packed with big flavor.", image: "pettiburger.jpg" },
        { name: "Crunch Grillhouse", price: 13, description: "Crispy and delicious grilled favorites.", image: "crunchgrill.jpg" },
        { name: "Hamburger Cheese", price: 12, description: "Simple yet satisfying cheesy burger.", image: "hamburgercheese.jpg" },
      ],
    };
  },
};
</script>

<style>
.container {
  max-width: 900px;
}
</style>
