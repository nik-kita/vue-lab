<template>
  <textarea
    :value="content"
    @keypress.enter.exact.prevent="aloneEnter"
    class="textarea-cmp textarea border"
    :rows
    placeholder="Press Enter+[alt|ctrl|command] to send message"
  >
  </textarea>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { gen_alone_enter_handler } from './gen-alone-enter-handler'

const content = ref('')
const rows = computed(() => {
  return content.value.split('\n').length
})
const aloneEnter = gen_alone_enter_handler(content)
</script>

<style>
.textarea-cmp.textarea {
  background-color: rgba(9, 9, 9, 0.2);
  padding: 0.4rem;
  font-family: monospace;
  width: 100%;
  resize: none;
}
.textarea-cmp.textarea:focus {
  outline: none;
  background-color: transparent;
}
</style>
