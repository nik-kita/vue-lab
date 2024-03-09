/**
 * @description
 * 1. omit only property that is existed in original T
 * 2. make sure that the omitted property is not accidenticaly will present again
 * 
 * @example
 * 
 type PrivateUser = { id: number, email: string, password: string, }
 type PublicUser = OmitStrict<PrivateUser, 'password'>;
 
 const userWithPassword: PrivateUser = { id: 1, email: 'example@mail.com', password: 'qwerty'};
 const userWithSimpleOmit: Omit<PrivateUser, 'password'> = userWithPassword; // Ok... oops... password is still there
 const user: PublicUser = userWithPassword; // Error!
 */
export type OmitStrict<T extends Record<string, any>, K extends keyof T> = Omit<T, K> & Partial<Record<K, never>>

/**
 * @description omit only property that is exist in T and replace it with your own
 */
export type OmitReplace<T extends Record<string, any>, U extends Partial<Record<keyof T, any>>> = Omit<T, keyof U> & U

/**
 * @description add your property to T (replace previous one if exist)
 */
export type AddOrReplace<T extends Record<string, any>, U extends Record<string, any>> = Omit<T, keyof U> & U
