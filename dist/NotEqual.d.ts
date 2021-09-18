import { Equal } from './Equal'

/**
 * True is A does not equal B
 * 
 * @example
 * type Good = NotEqual<number, string>
 * type Bad = NotEqual<number, number>
 */
export type NotEqual<A, B> = true extends Equal<A, B> ? false : true
