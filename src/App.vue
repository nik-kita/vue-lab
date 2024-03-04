<script setup lang="ts">
import { ref } from 'vue';
import RadioGroup from './RadioGroup.vue';

const radioGroupItems = [
  { value: 'hello' },
  { value: 'world' },
];
const title = ref('');

</script>



<template>
  <div class="app root">
    <div class="app pink content">
      <RadioGroup :items="radioGroupItems" v-model="title" />
    </div>
    <div class="app header">
      <h1>
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<style>
.app.root {
  height: 100%;
  display: grid;
  grid-template:
    "h h h h h h h" 1fr
    "r r c c c c l" 1fr
    "r r c c c c l" 1fr
    "r r c c c c l" 1fr
    "r r c c c c l" 1fr
    "f f f f f f f" 1fr
    "f f f f f f f" 1fr
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr
  ;
}

.app.header {
  grid-area: h;
  display: flex;
  justify-content: center;
  place-items: center;
}

.app.content {
  grid-area: c;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  place-items: center;
  text-align: center;
}

.app.pink {
  background-color: pink;
}
</style>
