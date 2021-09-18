/**
 * The symmetric difference of `A` and `B`.
 * 
 * @example
 * SymmetricDifference<'a' | 'b', 'b' | 'c'> // 'a' | 'c'
 */
export type SymmetricDifference<A, B> = Exclude<A | B, A & B>
