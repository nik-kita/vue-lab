import { use_auth_store } from '@/store'
import type { Router } from 'vue-router'

export function auth_decorator(router: Router) {
  router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/about']
    const authRequired = !publicPages.includes(to.path)

    if (authRequired) {
      const auth = use_auth_store()
      if (!auth.user) {
        auth.returnUrl = to.fullPath
        return '/login'
      }
    }
  })
}
