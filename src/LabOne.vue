<template>
  <RadioGroup
    @update-radio="onChildUpdateRadio"
    :variants="variants"
    name="Learn radio input (version without 'v-model' sugar)"
  />
  <hr />
  <h4 v-show="pickedRadio">"{{ pickedRadio.toUpperCase() }}" is picked!</h4>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import RadioGroup from './lib/RadioGroup.vue'

const variants =
  'In this lab I learn both raw and vue-specific nature of input with type radio'.split(' ')
const pickedRadio = ref('')

function onChildUpdateRadio(radio: string) {
  pickedRadio.value = radio
}
</script>
