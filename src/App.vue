<template>
  <SpeedInsights>
    <v-app>
      <Header />
      <Rolling />
    </v-app>
  </SpeedInsights>
</template>

<script lang="ts" setup>
import Header from "@/components/Header/Header.vue";
import Rolling from "./components/Rolling/Rolling.vue";
import { computed } from "vue";
import { useRollingStore } from "./stores/rolling";
import { SpeedInsights } from "@vercel/speed-insights/vue";

computed(() => localStorage);
computed(() => useRollingStore());
</script>

<style></style>
