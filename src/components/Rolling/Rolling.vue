<template>
  <div class="flex justify-center flex-col items-center">
    <RollingLogo />
    <RollingStats class="mb-5" />
    <RollingButton />
  </div>
</template>

<script lang="ts" setup>
import RollingButton from "./RollingButton.vue";
import RollingLogo from "./RollingLogo.vue";
import RollingStats from "./RollingStats.vue";
</script>

<style></style>
