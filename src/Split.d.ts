/**
 * Split `Source` by `Delimeter`.
 * 
 * @example
 * type Characters = Split<'abc'> // ['a', 'b', 'c']
 * type Parts = Split<'a.b.c', '.'> // ['a', 'b', 'c']
 */
export type Split<
  Source extends string,
  Delimeter extends string | string[] = ''
> = Delimeter extends string[]
  ? WalkDelimeters<[Source], Delimeter>
  : WalkString<Source, Delimeter>

// walk over single string and split by delimeter
type WalkString<
  Source extends string,
  Delimeter extends string = '',
> = Source extends `${infer Head}${Delimeter}${infer Tail}`
  ? [Head, ...WalkString<Tail, Delimeter>]
  : Source extends Delimeter
    ? []
    : [Source]

// walk over strings and split each by delimeter
type WalkParts<
  Parts extends string[],
  Delimeter extends string,
  Acc extends string[] = [],
> = Parts extends [infer Head, ...infer Tail]
  ? WalkParts<Tail, Delimeter, [...Acc, ...WalkString<Head, Delimeter>]>
  : Acc

// walk over delimeters and split parts by current delimeter
type WalkDelimeters<
  Parts extends string[],
  Delimeters extends string[],
  Acc extends string[] = [],
> = Delimeters extends [infer Head, ...infer Tail]
  ? WalkDelimeters<WalkParts<Parts, Head>, Tail>
  : Parts
