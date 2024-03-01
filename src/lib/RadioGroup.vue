<template>
  <div class="rg root" @click.self="reset">
    <template v-for="name in new Set('Hello world!'.split(' '))" :key="name">
      <label :for="name">{{ pickedRadio === name ? name : x.repeat(name.length) }}</label>
      <input type="radio" :value="name" v-model="pickedRadio" :false-value="x" :true-value="name">
    </template>
    <h1 class="rg hero">{{ pickedRadio }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const x = 'x';
const pickedRadio = ref('');

function reset() {
  pickedRadio.value = '';
}
</script>

<style>
.rg .root {
  width: 100vw;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
}

.rg .hero {
  font-weight: bold;
  background-color: black;
  color: grey;
}
</style>