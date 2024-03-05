<script setup lang="ts">
const props = defineProps<{
  value: number | string
}>()
const emit = defineEmits<{
  click: [value: typeof props.value]
}>()
function pressed() {
  emit('click', props.value)
}
</script>

<template>
  <input type="button" @click="pressed" :value="props.value" />
</template>
