/**
 * Map strings to uppercase.
 * 
 * @example
 * type Upper = MapUppercase<['a', 'b']> // ['A', 'B']
 */
export type MapUppercase<
  T extends string[],
  Acc extends string[] = [],
> = T extends [infer Head, ...infer Tail]
  ? MapUppercase<Tail, [...Acc, Uppercase<Head>]>
  : Acc
