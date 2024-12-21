<template>
  <div
    class="flex flex-col sm:flex-row items-center justify-between max-w-[90%] lg:mx-0 sm:mx-auto p-4"
  >
    <HeaderLogo />
    <History />
  </div>
</template>

<script lang="ts" setup>
import { useRollingStore } from "@/stores/rolling";
import History from "../History/History.vue";
import HeaderLogo from "./Logo/HeaderLogo.vue";
import { computed } from "vue";

const rollingState = useRollingStore();
computed(() => rollingState.attemps);
</script>

<style></style>
