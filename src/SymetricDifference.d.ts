/**
 * The symmetric difference of `A` and `B`.
 * 
 * @example
 * type OuterSet = SymmetricDifference<'a' | 'b', 'b' | 'c'> // 'a' | 'c'
 * type OuterObj = SymmetricDifference<{ a: any, b: any }, { b: any, c: any }> // { a: any, c: any }
 */
export type SymmetricDifference<A, B> = [A] extends [object]
  ? [B] extends [object]
    ? Omit<A & B, keyof A & keyof B>
    : never
  : [B] extends [object]
    ? never
    : Exclude<A | B, A & B>
