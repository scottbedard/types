/**
 * Capitalize the first letter of each string.
 * 
 * @example
 * type Capitalized = MapLowercase<['foo', 'bar']> // ['Foo', 'Bar']
 */
 export type MapCapitalize<
 T extends string[],
 Acc extends string[] = [],
> = T extends [infer Head, ...infer Tail]
 ? MapCapitalize<Tail, [...Acc, Capitalize<Head>]>
 : Acc
