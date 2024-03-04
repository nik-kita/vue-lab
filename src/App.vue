<script setup lang="ts">
import RadioGroup from './RadioGroup.vue';



</script>



<template>
  <div class="app root">
    <div class="app pink content">
      <RadioGroup />
    </div>
  </div>
</template>

<style>
.app.root {
  height: 100%;
  display: grid;
  grid-template:
    "h h h h h h h"
    "r r c c c c l"
    "r r c c c c l"
    "r r c c c c l"
    "r r c c c c l"
    "f f f f f f f"
    "f f f f f f f"
  ;
}

.app.content {
  grid-area: c;
  display: flex;
  justify-content: center;
  place-items: center;
  text-align: center;
}

.app.pink {
  background-color: pink;
}
</style>
