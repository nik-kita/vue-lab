<script setup lang="ts">
import RadioBox from './lib/RadioBox.vue'
import { ref } from 'vue';

const title = ref('');

function update(fresh: string) {
  console.log('updated')
  title.value = fresh;
}

function pass() {
  return title;
}
</script>

<template>
  <RadioBox value="hello world" label="Hello World!" @change="update" :model-value="pass" />
  <RadioBox value="ok google" label="Ok Google" @change="update" :model-value="pass" />
</template>
