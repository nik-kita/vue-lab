<script setup lang="ts">
import { ref, watchEffect } from 'vue';


const props = defineProps<{
  radios: {
    value: string,
    label?: string,
  }[],
  value?: string,
}>();
const groupValue = ref(props.value);
const emit = defineEmits<{
  pickedValue: [value: string]
}>();

watchEffect(() => {
  emit('pickedValue', groupValue.value ?? '');
});

</script>

<template>
  <div class="radio-group">
    <div class="radio" v-for="{ value, label } of props.radios" :key="value">
      <label :for="value">{{ label || value }}</label>
      <input class="radio-input" type="radio" :value="value" v-model="groupValue" />
    </div>
  </div>
</template>

<style scoped>
.radio:hover {
  background-color: lightcoral;
}
</style>