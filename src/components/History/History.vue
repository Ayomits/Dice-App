<template>
  <div class="flex justify-center flex-col items-center mt-4">
    <h2 class="text-text text-2xl font-bold">ROLLING ATTEMPS</h2>
    <HistoryClean />
    <div>
      {{ store.getField("attemps") }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import HistoryClean from "./HistoryClean.vue";
import { useRollingStore } from "@/stores/rolling";

const store = useRollingStore();
computed(() => store.attemps);
</script>

<style></style>
