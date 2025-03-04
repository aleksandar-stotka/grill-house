<template>
  <div >
    <NuxtLink
        v-for="category in categoryData" 
        :key="category.id"
        :to="`/category/${category.id}`"
      >
        {{ category.name }}
      </NuxtLink>

  </div>
</template>

<script setup>
import { globals } from "#imports";
import { onMounted, ref } from "#imports";
import { useNuxtApp } from "#imports";
import { GET_CATEGORIES } from "~/apollo/categories/categoriesQueries";

const categoryData = ref([])
onMounted( async () => {
    try {
        const  {data} = await useNuxtApp().$apolloClient.query({
            query: GET_CATEGORIES
        })
       categoryData.value = data.categories

    } catch (err) {
       console.log(err)

    }
})

</script>

<style>

</style>