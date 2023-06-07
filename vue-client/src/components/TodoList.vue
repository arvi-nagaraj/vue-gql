<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { GET_ALL_TODOS_QUERY } from './Todo.query';
const { result, loading, error } = useQuery(GET_ALL_TODOS_QUERY);

console.log(loading.value, error.value);
</script>

<template>
  <v-container fluid>
    <v-list lines="one">
      <v-list-item v-for="todo in result?.getAllTodos" :key="todo?.id">
        <v-list-item-title>
          <span :class="{ done: todo?.completed }">{{ todo?.todo }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
