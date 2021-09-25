/**
 * Map strings to lowercase.
 * 
 * @example
 * type Lower = MapLowercase<['A', 'B']> // ['a', 'b']
 */
export type MapLowercase<
  T extends string[],
  Acc extends string[] = [],
> = T extends [infer Head, ...infer Tail]
  ? MapLowercase<Tail, [...Acc, Lowercase<Head>]>
  : Acc
