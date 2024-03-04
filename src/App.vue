<script setup lang="ts">
import { ref } from 'vue';
import RadioGroup from './lib/RadioGroup.vue';

const title = ref('');

function updateTitle(fresh: string) {
  console.log(fresh);
  title.value = fresh;
}

</script>



<template>
  <div class="app root">
    <div class="app header">{{ title }}!</div>
    <div class="app content">
      <RadioGroup @picked-value="updateTitle" :radios="[
      {
        value: 'hello world',
      },
      {
        value: 'ok, google',
      },
      {
        value: 'foo bar baz'
      }
    ]" />
    </div>
  </div>
</template>

<style>
.app.root {
  height: 100%;
  display: grid;
  grid-template:
    "h h h h h"
    "s c c c c"
    "s c c c c"
    "s c c c c"
    "f f f f f"
    "f f f f f"
}

.app.header {
  grid-area: h;
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
}

.app.content {
  padding: 2rem;
  grid-area: c;
}
</style>
