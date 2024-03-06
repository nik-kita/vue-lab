import type { Ref } from "vue";

export const gen_alone_enter_handler =
  (textareaValue: Ref<string>) => (ev: KeyboardEvent) => {
    const value = (ev.target as HTMLTextAreaElement).value;
    const { lines, word_position_with_max_len } = (value as string).split("\n")
      .reduce(
        (acc, line) => {
          acc.lines.push(line);
          line.split(/ +/).forEach(({ length }, i) => {
            const prev = acc.word_position_with_max_len[i];
            if (!prev || length > prev) {
              acc.word_position_with_max_len[i] = length;
            }
          });

          return acc;
        },
        { lines: [], word_position_with_max_len: [] } as {
          lines: string[];
          word_position_with_max_len: number[];
        },
      );

    const result = lines
      .map((line) =>
        line
          .split(/ +/)
          .map((word, i) =>
            word.trim().padEnd(word_position_with_max_len[i], " ")
          )
          .join(" ")
      )
      .join("\n") + "\n";
    textareaValue.value = result;
  };
