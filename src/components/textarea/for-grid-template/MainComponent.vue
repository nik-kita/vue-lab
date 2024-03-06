<template>
  <textarea
    class="textarea-ghost textarea"
    :value="content"
    @keypress.enter.exact.prevent="aloneEnter"
    :rows="lines.length > 3 ? lines.length : 3"
    :placeholder="'press Enter to add a new line\nand Shift+Enter to submit the form\n(Shift or Alt or Ctrl or Command...)'"
  >
  </textarea>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { gen_alone_enter_handler } from './gen-alone-enter-handler'

const content = ref('')
const lines = computed(() => {
  const result = content.value.split('\n')

  return result
})
const aloneEnter = gen_alone_enter_handler(content)
</script>

<style scoped>
.textarea-ghost {
  padding: 0.4rem;
  font-family: monospace;
  width: 100%;
  outline: 4px dashed orange;
}

.textarea {
  background-color: rgba(9, 9, 9, 0.2);
  resize: none;
  overflow: hidden;
}
</style>
