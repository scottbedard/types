/**
 * Object A without properties from B
 * 
 * @example
 * Without<{ a: any, b: any }, { b: any }> // { a: any }
 */
export type Without<A, B> = {
  [K in Exclude<keyof A, keyof B>] ?: never
}
