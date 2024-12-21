<template>
  <div class="text-center font-bold">
    <p class="font-bold text-[15px]">{{ label }}</p>
    <v-card
      class="flex justify-center items-center w-[60px] h-[60px] bg-gray-100 border border-gray-300 rounded-md shadow-sm"
    >
      <input
        v-if="isInput"
        class="text-center text-3xl font-bold bg-transparent border-none outline-none w-full h-full no-arrows"
        type="text"
        :value="value"
        :readonly="isReadonly"
        :maxlength="2"
        pattern="\d{1,2}"
        @input="onInput"
      />
      <p v-else class="text-center text-3xl mt-[20%]">{{ value }}</p>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRollingStore, type RollingStoreState } from "@/stores/rolling";

export interface IRollingBarProps {
  field: keyof RollingStoreState;
  label?: string;
  isInput?: boolean;
  isReadonly?: boolean;
}

const { field, isInput } = defineProps<IRollingBarProps>();
const rollingState = useRollingStore();

const value = computed(() => rollingState[field] || 0);

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  let newValue: string | number = input.value;

  if (newValue.length > 2) {
    newValue = newValue.slice(0, 2);
    input.value = newValue;
  }
  if (Number.isNaN(Number(newValue))) {
    newValue = 0;
    input.value = "0";
  }

  rollingState.set(field, Number(newValue));
};
</script>

<style scoped>
.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
