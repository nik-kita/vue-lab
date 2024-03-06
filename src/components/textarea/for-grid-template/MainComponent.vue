<template>
  <textarea
    :value="formattedContent"
    @keypress.enter.exact.prevent="aloneEnter"
    class="textarea-cmp textarea border border-gray-300 rounded-md p-2"
    :rows
    placeholder="Press Enter+[alt|ctrl|command] to send message"
  >
  </textarea>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { gen_alone_enter_handler } from './gen-alone-enter-handler'

const formattedContent = ref('')
const rows = computed(() => {
  return formattedContent.value.split('\n').length
})
const aloneEnter = gen_alone_enter_handler(formattedContent)
</script>

<style>
.textarea-cmp.textarea {
  padding: 1rem;
  font-family: monospace;
  width: 100%;
  resize: none;
}
</style>
