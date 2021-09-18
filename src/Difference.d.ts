/**
 * Elements of `A` that are not elements of `B`. For unions, this
 * is the same as the built in `Exclude` utility.
 * 
 * @example
 * type Left = Difference<{ a: any, b: any }, { b: any, c: any }> // { a: any }
 */
export type Difference<A, B> = [A] extends [object]
  ? [B] extends [object]
    ? Omit<A, keyof B>
    : never
  : [B] extends [object]
    ? never
    : Exclude<A, B>
