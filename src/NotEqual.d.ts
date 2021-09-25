import { Equal } from './Equal'
import { Not } from './Not'

/**
 * Types `true` if `A` does not equal `B`.
 * 
 * @example
 * type Good = NotEqual<number, string> // true
 * type Bad = NotEqual<number, number> // false
 */
export type NotEqual<A, B> = Not<Equal<A, B>>
