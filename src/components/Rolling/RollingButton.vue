<template>
  <v-btn
    @click="rollingLogic"
    elevation="20"
    width="500"
    :loading="loading ? `white` : false"
    class="rounded"
    height="100"
    color="text-lightText"
  >
    <p class="text-lightText font-bold font-roboto text-[50px]">Roll</p>
  </v-btn>
</template>

<script lang="ts" setup>
import { useRollingStore } from "@/stores/rolling";
import _ from "lodash";
import { ref } from "vue";

// TODO: Rolling logic
const loading = ref(false);
const rollingStore = useRollingStore();

const rollingLogic = (_event: Event) => {
  loading.value = true;
  setTimeout(() => {
    const randNumber = _.random(0, rollingStore.cubs * 6);
    loading.value = false;
    rollingStore.increment("attemps");
    rollingStore.set("number", randNumber);
    rollingStore.roll();
  }, rollingStore.duration * 1_000);
};
</script>

<style></style>
