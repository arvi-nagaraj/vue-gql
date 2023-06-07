<script setup lang="ts">
import { ref } from 'vue';
import ItemList from './components/ItemList.vue';
import TodoList from './components/TodoList.vue';

const renderStore = ref(0);
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar>
        <v-app-bar-title>
          <v-btn-toggle v-model="renderStore">
            <v-btn> E-Store </v-btn>

            <v-btn> Todo List </v-btn>
          </v-btn-toggle>
        </v-app-bar-title>
      </v-app-bar>

      <v-main style="height: 100%">
        <TodoList v-if="renderStore" /> <ItemList v-if="!renderStore" />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
