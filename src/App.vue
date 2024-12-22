<template>
  <v-app> 
    <Header />
    <Rolling />
  </v-app>
</template>

<script lang="ts" setup>
import Header from "@/components/Header/Header.vue";
import Rolling from "./components/Rolling/Rolling.vue";
import { computed } from "vue";
import { useRollingStore } from "./stores/rolling";
computed(() => localStorage);
computed(() => useRollingStore());
</script>

<style></style>
