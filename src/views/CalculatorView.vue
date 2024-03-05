<script setup lang="ts">
import { ref } from 'vue'
import CalculatorNumInput from '../components/CalculatorNumInput.vue'

const monitorOutput = ref('0')
function processNumClick(num: number) {
  const firstPart = monitorOutput.value === '0' ? '' : monitorOutput.value
  const lastChar = monitorOutput.value.at(-1)

  monitorOutput.value = firstPart + (Number.isNaN(lastChar) && lastChar !== '.' ? ` ${num}` : num)
}
function processC() {
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
      v-for="(_, i) in 10"
      :key="i"
      :value="i"
      class="calculator"
      :class="'num' + i"
      @click="processNumClick"
    />
    <button @click="processBackspace" class="calculator backspace">Backspace</button>
    <button @click="processC" value="C" class="calculator c">C</button>
    <button class="calculator divide">/</button>
    <button class="calculator multiply">x</button>
    <button class="calculator minus">-</button>
    <button class="calculator plus">+</button>
    <button
      @click="() => (monitorOutput += monitorOutput.at(-1) === '.' ? '' : '.')"
      class="calculator dot"
    >
      .
    </button>
    <button class="calculator equals">=</button>
  </main>
</template>

<style>
.calculator.root {
  display: grid;
  height: 100%;
  gap: 2px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template:
    'monitor monitor monitor  monitor  '
    'c       c       .        backspace'
    'num7    num8    num9     divide   '
    'num4    num5    num6     multiply '
    'num1    num2    num3     minus    '
    'num0    dot     plus     equals   ';
}

.calculator.monitor {
  grid-area: monitor;
  resize: none;
}

.calculator.backspace {
  grid-area: backspace;
}

.calculator.c {
  grid-area: c;
}

.calculator.divide {
  grid-area: divide;
}

.calculator.multiply {
  grid-area: multiply;
}

.calculator.minus {
  grid-area: minus;
}

.calculator.plus {
  grid-area: plus;
}

.calculator.equals {
  grid-area: equals;
}

.calculator.dot {
  grid-area: dot;
}

.calculator.num1 {
  grid-area: num1;
}

.calculator.num2 {
  grid-area: num2;
}

.calculator.num3 {
  grid-area: num3;
}

.calculator.num4 {
  grid-area: num4;
}

.calculator.num5 {
  grid-area: num5;
}

.calculator.num6 {
  grid-area: num6;
}

.calculator.num7 {
  grid-area: num7;
}

.calculator.num8 {
  grid-area: num8;
}

.calculator.num9 {
  grid-area: num9;
}

.calculator.num0 {
  grid-area: num0;
}
</style>
