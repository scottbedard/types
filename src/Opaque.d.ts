declare const tag: unique symbol

/**
 * Opaque type `T` with an optional `Token`.
 * 
 * @example
 * type USD = Opaque<number, 'usd'>
 * 
 * const dollars = 5 as USD
 */
export type Opaque<T, Token = unknown> = T & { [tag]: Token }
