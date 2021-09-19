/**
 * Split `Source` by `Delimeter`.
 * 
 * @example
 * Split<'a-b-c', '-'> // ['a', 'b', 'c']
 */
export type Split<
  Source extends string,
  Delimeter extends string,
> = Source extends `${infer Head}${Delimeter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimeter>]
  : [Source]
