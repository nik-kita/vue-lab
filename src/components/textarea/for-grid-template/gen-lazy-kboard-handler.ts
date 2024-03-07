import type { Ref } from 'vue'

export const gen_lazy_kboard_handler = (textareaValue: Ref<string>) => (ev: KeyboardEvent) => {
  console.log(ev.key)
  const value = (ev.target as HTMLTextAreaElement).value
  if (ev.key === 'Enter') {
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

    const result = lines
      .map((line) =>
        line
          .split(/ +/)
          .map((word, i) => word.trim().padEnd(word_position_with_max_len[i], ' '))
          .join('  ')
      )
      .join('\n')

    textareaValue.value = result + '\n'
  } else if (ev.key === 'Backspace') {
    textareaValue.value = value
  }
}
