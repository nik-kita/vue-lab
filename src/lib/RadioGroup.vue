<template>
  <fieldset class="radiogroup list">
    <legend v-if="name">{{ name }}</legend>
    <li v-for="variant of variants" :key="variant">
      <label :for="variant">{{ variant }}</label>
      <input type="radio" :value="variant" :name="name || _now" @change="updateRadio(variant)" />
    </li>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const _now = Date.now().toFixed(16)
const props = defineProps<{
  variants: string[]
  name?: string
  initialPick?: string
}>()
const emit = defineEmits<{
  updateRadio: [string]
}>()
const pick = ref(props.initialPick)
function updateRadio(variant: string) {
  pick.value = variant
  emit('updateRadio', variant)
}
</script>

<style>
.radiogroup .list {
  display: flex;
  flex-flow: column nowrap;
}
</style>
