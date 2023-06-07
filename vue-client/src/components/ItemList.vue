<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { GET_ALL_ITEMS_QUERY } from './ItemList.query';
const { result, loading, error } = useQuery(GET_ALL_ITEMS_QUERY);
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="item in result?.getAllItems" :key="item?.id">
        <v-card max-width="500">
          <v-card-text>{{ item?.category }}</v-card-text>
          <v-card-text>{{ item?.name }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
