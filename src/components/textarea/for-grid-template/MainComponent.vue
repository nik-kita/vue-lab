<script
  setup
  lang="ts"
>
import { computed, ref } from 'vue'
import { gen_alone_enter_handler } from './gen-alone-enter-handler'

const MIN_TEXTAREA_ROWS = 3;
const content = ref('|_i')
const lines = computed(() => {
  const result = content.value.split('\n')

  return result;
})
const aloneEnter = gen_alone_enter_handler(content)
</script>

<template>
  <div class="root">
    <div class="textarea-ghost ghost">|_i</div>
    <textarea
      class="textarea-ghost textarea"
      :value="content"
      @keypress.enter.exact.prevent="aloneEnter"
      :rows="lines.length > MIN_TEXTAREA_ROWS ? lines.length : MIN_TEXTAREA_ROWS"
      :placeholder="'press Enter to add a new line\nand Shift+Enter to submit the form\n(Shift or Alt or Ctrl or Command...)'"
    >
  </textarea>
  </div>
</template>

<style scoped>
@import url(./MainComponent.css);
</style>
