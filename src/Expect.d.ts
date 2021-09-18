/**
 * Expect a type to be true
 *
 * @example
 * type Good = Expect<true>
 * type Bad = Expect<false>
 */
export type Expect<T extends true> = T
