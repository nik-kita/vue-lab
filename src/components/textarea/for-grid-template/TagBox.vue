<script setup lang="ts">
const props = defineProps<{
  lines: string[]
}>()
</script>

<template>
  <div>
    <template v-for="(l, i) of props.lines" :key="i">
      <template v-for="(w, j) of l.split(/\b/)" :key="j">
        <pre class="inline" :class="{ tag: !/ +/.test(w) }">{{ w }}</pre></template
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
</style>
