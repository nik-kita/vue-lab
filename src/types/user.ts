import type { OmitStrict } from '@/helpers/omit.type'

export namespace User {
  export type Private = {
    id: number
    name: string
    email: string
    role: 'admin' | 'user'
    password: string
  }
  export type Public = OmitStrict<Private, 'password'>
}
