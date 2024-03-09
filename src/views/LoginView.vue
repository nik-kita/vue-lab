<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>
<template>
  <div>
    <form>
      <h4>Login</h4>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
    </form>
  </div>
</template>
