import { Equal } from './Equal'

/**
 * Types `true` if all `Sources` equal `Value`.
 * 
 * @example
 * type Good = AllEqual<[1, 1], 1> // true
 * type Bad = AllEqual<[1, 2], 1> // false
 */
export type AllEqual<
  Sources extends any[],
  Value
> = Sources extends [infer Head, ...infer Tail]
  ? Equal<Head, Value> extends true
    ? AllEqual<Tail, Value>
    : false
  : true
