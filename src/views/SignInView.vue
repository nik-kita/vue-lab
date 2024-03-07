<script setup lang="ts">
import { login } from '@/global/auth/login'
import { ref } from 'vue'

const email = ref('johhn@mail.com')
const password = ref('changeme')

async function submit() {
  function validateInput(
    email: unknown,
    password: unknown
  ): {
    email: string
    password: string
  } {
    return {
      email: email as string,
      password: password as string
    }
  }

  const res = await login(validateInput(email.value, password.value))
  console.log(res)
}
</script>

<template>
  <div class="root">
    <form @submit.prevent="submit" class="form">
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button class="px-2" type="submit">Sign In</button>
    </form>
  </div>
</template>

<style>
@layer sign-in-view;

.root {
  height: 100%;
  width: 100%;
  gap: 2rem;
  display: grid;
  grid-template:
    'header' 1fr
    'content' 10fr
    'footer' 5fr
    / 1fr;
}

.form {
  gap: 1rem;
  grid-area: content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
