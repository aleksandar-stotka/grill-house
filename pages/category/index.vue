<template>
  <div>category</div>
</template>

<script setup>
import { gql } from 'graphql-tag';

const GET_CATEGORY = gql`
query getCategory($id: ID!) {
    categories(id:$ id) {
       name
       documentId
       grillmenus {
      grillmenuimage {
        url
      }
      productname
      grildescription
      price
    }
    }
  }


`;



</script>

<style>

</style>