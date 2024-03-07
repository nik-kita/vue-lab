import { API_HOST } from './const'
import JsCookie from 'js-cookie'

export const query = async <T = unknown>(
  endpoint: string,
  options: Partial<{
    method: string
    body: object
    with_credentials: boolean
  }> = {}
) => {
  const { method = 'get', body = {}, with_credentials = true } = options
  const res = await fetch(`${API_HOST}/${endpoint}`, {
    method,
    body: JSON.stringify(body),
    ...(with_credentials && {
      authorization: `Bearer ${JsCookie.get('access')}`
    })
  })
  if (res.status > 204) {
    console.error('Invalid response: ', res)
    return { ok: false } as const
  }
  const data = (await res.json()) as T

  return {
    ok: true,
    status: res.status,
    body: data
  } as const
}
