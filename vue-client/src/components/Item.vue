<script setup lang="ts">
defineProps<{
  category: string;
  item: string;
}>();
</script>

<template>
  <v-card>
    <v-card-text>{category}</v-card-text>
    <v-card-text>{item}</v-card-text>
  </v-card>
</template>

<style scoped></style>
