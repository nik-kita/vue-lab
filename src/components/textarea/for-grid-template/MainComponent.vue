<script setup lang="ts">
import { computed, ref } from 'vue'
import { gen_lazy_kboard_handler } from './gen-lazy-kboard-handler'
import TagBox from './TagBox.vue'

const MIN_TEXTAREA_ROWS = 3
const content = ref('')
const textarea = ref()
const lines = computed(() => {
  const result = content.value.split('\n')
  console.log(result)
  if (['', '\n'].includes(result[result.length - 1])) {
    result.pop()
  }
  console.log(result)

  return result
})
const kboardHandler = gen_lazy_kboard_handler(content)
const onClickFocusTextarea = () => {
  textarea.value.focus()
}
</script>

<template>
  <div class="root">
    <TagBox :lines="lines" @click="onClickFocusTextarea" class="textarea-ghost ghost" />
    <textarea
      ref="textarea"
      class="textarea-ghost textarea"
      :value="content"
      @keypress.enter.exact.prevent="kboardHandler"
      @keyup.backspace="kboardHandler"
      @keypress.backspace="kboardHandler"
      :rows="(lines.length > MIN_TEXTAREA_ROWS ? lines.length : MIN_TEXTAREA_ROWS) + 1"
      :placeholder="'press Enter to add a new line\nand Shift+Enter to submit the form\n(Shift or Alt or Ctrl or Command...)'"
    ></textarea>
  </div>
</template>

<style>
@layer base-layer;
@import url(./MainComponent.css) layer(textarea-for-grid-template);
</style>
./gen-lazy-kbord-handler./gen-lazy-kbaord-handler./gen-lazy-kbaord-handler
