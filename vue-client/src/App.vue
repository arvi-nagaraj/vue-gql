<script setup lang="ts">
import ItemList from './components/ItemList.vue';
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar title="E-Store"></v-app-bar>

      <v-main style="height: 100%"> <ItemList /> </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
