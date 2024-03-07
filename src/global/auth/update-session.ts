import { query } from '../query'
import { store } from '../store'

export async function updateSession() {
  const res = await query<any>('/auth/profile')

  if (!res.ok) {
    console.log('Invalid session')
  } else {
    store.value.set('session', res.body)
  }
}
