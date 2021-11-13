declare const tag: unique symbol

/**
 * Opaque type `T` that encodes an additional `Token`.
 * 
 * @example
 * type USD = Opaque<number, 'usd'>
 * 
 * const dollars = 5 as USD
 */
export type Opaque<T, Token = unknown> = T & { [tag]: Token }

/**
 * Transparent type `T` that does not encode additional information.
 */
export type Transparent<T> = T & { [tag]?: never }
