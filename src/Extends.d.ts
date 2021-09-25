/**
 * Types `true` if `A` extends `B`.
 * 
 * @example
 * type Good = Extends<'foo', string> // true
 * type Bad = Extends<'bar', number> // false
 */
export type Extends<A, B> = A extends B ? true : false
