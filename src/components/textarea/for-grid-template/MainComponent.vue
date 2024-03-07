<script setup lang="ts">
import { computed, ref } from 'vue'
import { gen_alone_enter_handler } from './gen-alone-enter-handler'
import TagBox from './TagBox.vue'

const MIN_TEXTAREA_ROWS = 3
const content = ref('')
const textarea = ref()
const lines = computed(() => {
  const result = content.value.split('\n')

  result.pop()

  return result
})
const aloneEnter = gen_alone_enter_handler(content)
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
      @keypress.enter.exact.prevent="aloneEnter"
      :rows="(lines.length > MIN_TEXTAREA_ROWS ? lines.length : MIN_TEXTAREA_ROWS) + 1"
      :placeholder="'press Enter to add a new line\nand Shift+Enter to submit the form\n(Shift or Alt or Ctrl or Command...)'"
    ></textarea>
  </div>
</template>

<style>
@layer base-layer;
@import url(./MainComponent.css) layer(textarea-for-grid-template);
</style>
