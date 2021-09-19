/**
 * Split `Source` by `Delimeter`.
 * 
 * @example
 * type Characters = Split<'abc'> // ['a', 'b', 'c']
 * type Parts = Split<'a.b.c', '.'> // ['a', 'b', 'c']
 */
export type Split<
  Source extends string,
  Delimeter extends string = '',
> = Source extends `${infer Head}${Delimeter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimeter>]
  : Source extends Delimeter
    ? []
    : [Source]
