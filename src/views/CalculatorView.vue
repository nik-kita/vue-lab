<script setup lang="ts">
import { ref } from 'vue'
import CalculatorNumInput from '../components/CalculatorNumInput.vue'

const history = [] as string[]
const isNumAllowed = ref(true)
const isOperationAllowed = ref(false)
const monitorOutput = ref('0')
function processNumClick(num: number) {
  isOperationAllowed.value = true
  const firstPart = monitorOutput.value === '0' ? '' : monitorOutput.value
  const lastChar = monitorOutput.value.at(-1)

  monitorOutput.value = firstPart + (Number.isNaN(lastChar) && lastChar !== '.' ? ` ${num}` : num)
}
function processC() {
  isNumAllowed.value = true
  monitorOutput.value = '0'
}
function processBackspace() {
  if (monitorOutput.value.length === 1) {
    monitorOutput.value = '0'
  } else {
    monitorOutput.value = monitorOutput.value.slice(0, -1)
  }
}
</script>

<template>
  <main class="calculator root">
    <textarea class="calculator monitor" type="text" disabled v-model="monitorOutput"></textarea>
    <CalculatorNumInput
      :disabled="!isNumAllowed"
      v-for="(_, i) in 10"
      :key="i"
      :value="i"
      class="calculator"
      :class="'num' + i"
      @click="processNumClick"
    />
    <button @click="processBackspace" class="calculator backspace">Backspace</button>
    <button @click="processC" value="C" class="calculator c">C</button>
    <button :disabled="!isOperationAllowed" class="calculator divide">/</button>
    <button :disabled="!isOperationAllowed" class="calculator multiply">x</button>
    <button :disabled="!isOperationAllowed" class="calculator minus">-</button>
    <button :disabled="!isOperationAllowed" class="calculator plus">+</button>
    <button
      @click="() => (monitorOutput += monitorOutput.at(-1) === '.' ? '' : '.')"
      class="calculator dot"
    >
      .
    </button>
    <button :disabled="!isOperationAllowed" class="calculator equals">=</button>
  </main>
</template>

<style>
@import url(./CalculatorView.css);
</style>
