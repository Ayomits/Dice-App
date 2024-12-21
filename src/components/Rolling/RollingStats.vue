<template>
  <div class="flex gap-5">
    <RollingBar
      v-for="field in fields"
      :field="field.field"
      :label="field.label"
      :is-readonly="field.isReadonly"
      :is-input="field.isInput"
    />
  </div>
</template>

<script lang="ts" setup>
import RollingBar, { type IRollingBarProps } from "./RollingBar.vue";

const fields: IRollingBarProps[] = [
  {
    label: "Duration",
    field: "duration",
    isInput: true,
  },
  {
    label: "Cubs",
    field: "cubs",
    isInput: true,
  },
  {
    label: "Number",
    field: "number",
    isReadonly: true,
  },
  {
    label: "Attemps",
    field: "attemps",
    isReadonly: true,
  },
];
</script>

<style></style>
