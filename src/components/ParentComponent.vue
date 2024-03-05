<script setup lang="ts">
import { ref } from 'vue'
import CalculatorInput from './CalculatorInput.vue'

const toggle = ref(true)
</script>

<template>
  Parent
  <template v-for="(_, i) in 10" :key="i">
    <CalculatorInput :value="i" @click="console.log" :disabled="toggle" />
  </template>
  <button @click="toggle = !toggle">toggle</button>
</template>
