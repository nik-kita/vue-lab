<script setup lang="ts">
const props = defineProps<{
  value: number
}>()
const emit = defineEmits<{
  click: [value: number]
}>()
function pressed() {
  emit('click', props.value)
}
</script>

<template>
  <input type="button" @click="pressed" :value="props.value" />
</template>
