export function gen_fetch<
  T extends () => {
    user:
      | {
          access?: string
          refresh?: string
        }
      | undefined
    logout: () => void
  }
>(config: T) {
  const my_fetch = {
    get: <H = object, Res = void>(url: string, headers?: H) => req<undefined, H, Res>(url, 'get', undefined, headers),
    post: <B, H = object, Res = void>(url: string, body: B, headers?: H) => req<B, H, Res>(url, 'post', body, headers),
    put: <B, H = object, Res = void>(url: string, body: B, headers?: H) => req<B, H, Res>(url, 'put', body, headers),
    delete: <H = object, Res = void>(url: string, headers?: H) => req<undefined, H, Res>(url, 'delete', undefined, headers)
  }

  async function req<B, H = object, Res = void>(
    url: string,
    method: Method,
    body?: B,
    headers?: H
  ): Promise<
    | {
        ok: false
        reason?: string
      }
    | {
        ok: true
        payload: Res
      }
  > {
    const { user, logout } = config()
    const access = user?.access
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(access && { authorization: `Bearer ${access}` }),
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    })

    if (!res.ok) {
      return { ok: false, reason: res.statusText }
    } else if (res.status === 401 || res.status === 403) {
      logout()
      return {
        ok: false,
        reason: 'Unauthorized'
      }
    } else if (res.status === 204) {
      return { ok: true, payload: null as Res }
    }

    const payload = await res.json()

    return {
      ok: true,
      payload
    }
  }

  return my_fetch
}

type Method = 'get' | 'post' | 'put' | 'delete'
