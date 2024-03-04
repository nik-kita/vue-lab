<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <RouterLink v-for="link of ['calculator']" :key="link" :to="link">{{
      link.toUpperCase()
    }}</RouterLink>
  </main>
</template>
