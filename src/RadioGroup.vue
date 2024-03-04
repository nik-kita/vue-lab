<script setup lang="ts">
/* eslint-disable vue/no-mutating-props */
const props = defineProps<{
  items: {
    value: string,
    label?: string,
  }[],
}>();
const picked = defineModel()
</script>

<template>
  <template v-for="{ value, label } of props.items" :key="label">
    <label class="radio-group item">
      {{ label ?? value }}
      <input type="radio" :value="value" v-model="picked" />
    </label>
  </template>
</template>

<style>
.radio-group.item {
  width: 100%;
}
.radio-group.item:hover {
  background-color: rgba(20, 20, 20, 0.5);
  color: white;
}
</style>
