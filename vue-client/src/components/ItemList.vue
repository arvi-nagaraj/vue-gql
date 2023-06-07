<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { GET_ALL_ITEMS_QUERY } from './ItemList.query';
const { result, loading, error } = useQuery(GET_ALL_ITEMS_QUERY);

console.log(loading.value, error.value);
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="item in result?.getAllItems" :key="item?.id">
        <v-card width="500px" height="350px" border="1" density="compact">
          <v-img
            height="200px"
            :src="item?.thumbnail ?? ''"
            class="text-white"
            object-fit="contain"
          ></v-img>
          <v-card-title>{{ item?.title }}</v-card-title>
          <v-card-text>{{ item?.description }}</v-card-text>
          <v-card-text>{{ item?.price }}$ </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
