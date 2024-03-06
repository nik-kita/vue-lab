<script setup lang="ts">
import { computed, ref } from 'vue'
import { gen_alone_enter_handler } from './gen-alone-enter-handler'

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
    <div @click="onClickFocusTextarea" class="textarea-ghost ghost">
      <template v-for="(l, i) of lines" :key="i">
        <template v-for="(w, j) of l.split(/\b/)" :key="j">
          <pre class="inline" :class="{ tag: !/ +/.test(w) }">{{ w }}</pre></template
        ><br />
      </template>
    </div>
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

<style scoped>
@import url(./MainComponent.css);
</style>
