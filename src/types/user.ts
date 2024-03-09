import type { OmitStrict } from '@/helpers/omit.type'

export namespace User {
  export type Private = {
    id: number
    name: string
    email: string
    role: 'admin' | 'user'
    sub: string
    access: string
    refresh: string
  }
  export type Public = OmitStrict<Private, 'sub'>

  export function toPublic(user: Private): Public {
    delete (user as Partial<Private>).sub

    return user as Partial<Private> as Public
  }
}
