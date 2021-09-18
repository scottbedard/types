/**
 * Convert A keys to never that aren't part of B
 * 
 * @example
 * Without<{ a: any, b: any }, { b: any }> // { a?: never }
 */
export type Without<A, B> = {
  [K in Exclude<keyof A, keyof B>]?: never
}
