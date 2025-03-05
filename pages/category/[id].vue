<template>
 <div>
    <p>this is id {{ id }}</p>


 </div>
</template>

<script setup>
const {id} = useRoute().params
</script >

<style>

</style>