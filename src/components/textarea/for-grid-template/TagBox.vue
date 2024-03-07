<script setup lang="ts">
const props = defineProps<{
  lines: string[]
}>()
defineEmits<{
  closeTag: [lineNum: number, tagNum: number]
}>()
</script>

<template>
  <div>
    <template v-for="(l, i) of props.lines" :key="i">
      <template v-for="(w, j) of l.split(/\b/)" :key="j">
        <pre class="inline" :class="{ tag: !/ +/.test(w) }">{{ w }}</pre>
        <button
          @click="$emit('closeTag', i, j)"
          v-show="!/ +/.test(w)"
          type="button"
          class="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button> </template
      ><br />
    </template>
  </div>
</template>

<style>
@layer textarea-for-grid-template;

.tag {
  outline-offset: 4px;
  outline: 3px solid tomato;
  border-radius: 4px;
  cursor: pointer;
}

.close {
  display: inline;
  position: absolute;
}
</style>
