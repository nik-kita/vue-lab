import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { ref } from 'vue'

export const use_auth_store = defineStore('auth', () => {
  const user = ref<User.Public>()

  function logout() {
    user.value = undefined
  }

  return {
    user,
    logout
  }
})
