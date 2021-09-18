/**
 * The intersection of `A` and `B`, giving preference to `A`.
 * 
 * @example
 * type Shared = Intersection<{ a: any, b: number }, { c: string, d: any }> // { b: number }
 */
export type Intersection<A extends object, B extends object> = Pick<A, keyof A & keyof B>
