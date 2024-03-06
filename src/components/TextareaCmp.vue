<template>
  <textarea
    :value="formattedContent"
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
  return formattedContent.value.split('\n').length
})

const handleAloneEnter = (ev: KeyboardEvent) => {
  const value = (ev.target as HTMLTextAreaElement).value
  const { lines, word_position_with_max_len } = (value as string).split('\n').reduce(
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

  const result =
    lines
      .map((line) =>
        line
          .split(/ +/)
          .map((word, i) => word.trim().padEnd(word_position_with_max_len[i], ' '))
          .join(' ')
      )
      .join('\n') + '\n'
  formattedContent.value = result
  console.log(result)
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
