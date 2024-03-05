<script setup lang="ts">
import GridExample from '@/components/GridExample.vue';
import { ref } from 'vue';

const config = ref('');
</script>



<template>
  <textarea class="home textarea" @keypress.enter.stop :value="config"></textarea>
  <main class="home main">
    <GridExample :gridTemplate="`
      'header  header '
      'content content'
      'content content'
      'content content'
      'footer  footer '
      'footer  footer'
    `" />
    <GridExample :gridTemplate="`
      'h h h h h h'
      'c c c c c c'
      'c c c c c c'
      'a a b b d d'
      'a a b b d d'
      'f f f f f f'
    `" />
  </main>
</template>

<style>
.home.main {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row-reverse wrap;
}

.home.textarea {
  resize: none;
  width: 100%;
  height: 400px;
  padding: 4px;
  background-color: lightgrey;
}
</style>
