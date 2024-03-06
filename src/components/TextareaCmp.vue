<template>
  <textarea
    v-model="formattedContent"
    @keypress.enter.exact.prevent="handleAloneEnter"
    class="textarea-cmp textarea border border-gray-300 rounded-md p-2"
    :rows
    placeholder="Press Enter+[alt|ctrl|command] to send message"
  >
  </textarea>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const formattedContent = ref('')
const rows = computed(() => {
  console.log('computed')
  return formattedContent.value.split('\n').length
})

const handleAloneEnter = () => {
  const { lines, word_position_with_max_len } = formattedContent.value.split('\n').reduce(
    (acc, line) => {
      acc.lines.push(line)
      line.split(/ +/).forEach(({ length }, i) => {
        const prev = acc.word_position_with_max_len[i]
        if (!prev || length > prev) {
          acc.word_position_with_max_len[i] = length
        }
      })

      return acc
    },
    { lines: [], word_position_with_max_len: [] } as {
      lines: string[]
      word_position_with_max_len: number[]
    }
  )

  formattedContent.value =
    '\n' +
    lines
      .map((line) =>
        line
          .split(/ +/)
          .map((word, i) => word.trim().padEnd(word_position_with_max_len[i], ' '))
          .join(' ')
      )
      .join('\n') +
    '\n'
}
</script>

<style>
.textarea-cmp.textarea {
  padding: 1rem;
  font-family: monospace;
  width: 100%;
  resize: none;
}
</style>
