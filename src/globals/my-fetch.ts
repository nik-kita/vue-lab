import { use_auth_store } from '@/store'
import { gen_fetch } from '@/utils/gen-fetch'

export const my_fetch = gen_fetch(() => {
  const auth = use_auth_store()

  return {
    user: auth.user,
    logout: auth.logout
  }
})
