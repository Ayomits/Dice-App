<template>
  <v-btn
    @click="cleanHistory"
    icon="mdi-trash-can"
    :loading="isLoading ? 'text' : false"
    color="background"
    elevation="0"
  ></v-btn>
</template>

<script lang="ts" setup>
import { useRollingStore } from "@/stores/rolling";
import { ref } from "vue";

const rollingStore = useRollingStore();
const isLoading = ref(false);
const cleanHistory = () => {
  isLoading.value = true;
  setTimeout(() => {
    rollingStore.cleanRollingHistory();
    rollingStore.attemps = 0;
    isLoading.value = false;
  }, 1_000);
};
</script>

<style></style>
