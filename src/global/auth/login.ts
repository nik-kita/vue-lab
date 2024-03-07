import JsCookie from 'js-cookie'
import { query } from '../query'

export async function login(body: { email: string; password: string }) {
  try {
    const res = await query<{
      access_token: string
      refresh_token: string
    }>(`/auth/login`, {
      method: 'post',
      body,
      with_credentials: false
    })

    if (!res.ok) {
      console.error('Invalid response during login')
      return
    }

    JsCookie.set('access', res.body.access_token)
    JsCookie.set('refresh', res.body.refresh_token)
    return
  } catch (err) {
    console.error(err)
  }
}
