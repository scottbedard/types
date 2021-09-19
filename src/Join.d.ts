/**
 * Join `Parts` by `Delimeter`.
 *
 * @example
 * type Str = Join<['a', 'b', 'c']> // 'abc'
 * type Parts = Join<['a', 'b', 'c'], '.'> // 'a.b.c'
 */
export type Join<
  Parts extends string[],
  Delimeter extends string = '',
> = Parts extends []
  ? ''
  : Parts extends [string]
    ? `${Parts[0]}`
    : Parts extends [string, ...infer Tail]
      // @ts-expect-error https://github.com/microsoft/TypeScript/issues/45281
      ? `${Parts[0]}${Delimeter}${Join<Tail, Delimeter>}`
      : string
