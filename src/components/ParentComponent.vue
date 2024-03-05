<script setup lang="ts">
import { ref } from 'vue'
import CalculatorNumInput from './CalculatorNumInput.vue'

const toggle = ref(true)
</script>

<template>
  Parent
  <template v-for="(_, i) in 10" :key="i">
    <CalculatorNumInput :value="i" @click="console.log" :disabled="toggle" />
  </template>
  <button @click="toggle = !toggle">toggle</button>
</template>
