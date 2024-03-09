import { use_auth_store } from '@/store'
import { gen_fetch } from '@/utils/gen-fetch'

export const my_fetch = gen_fetch(use_auth_store())
