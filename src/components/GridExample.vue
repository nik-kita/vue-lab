<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  gridTemplate: string,
}>();
const items = computed(() => Array.from(new Set(props.gridTemplate.split('').filter((ch) => !['"', "'", '`', ';'].includes(ch)).join('').split(/\s/))).filter((ch) => !!ch));

function randomHex() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
}
</script>

<template>
  <div class="grid-example root">
    <pre class="grid-example pre">{{ props.gridTemplate }}</pre>
    <div :style="{
      gridTemplate: props.gridTemplate,
      display: 'grid',
      gap: '2px',
      width: '200px',
      height: '220px'
    }">
      <div v-for="(item, i) of items" :key="i" class="grid-example item"
        :style="{ gridArea: item, backgroundColor: randomHex(), color: 'white' }"></div>
    </div>
  </div>
</template>

<style>
.grid-example.root {
  padding: 20px;
}

.grid-example.item {}

.grid-example.pre {
  position: absolute;
  color: rgba(20, 20, 20, 0.8);
  padding: 20px;
  font-size: x-small;
}
</style>
