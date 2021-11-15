/**
 * Generate a union from the values of `T`.
 *
 * @example
 * ValueOf<Array<string>> // string
 * ValuesOf<{ foo: number, bar: string }> // number | string
 */
export type ValueOf<T extends object | Array<any>> = T extends Array<infer U> 
  ? U
  : T extends object
    ? T[keyof T]
    : never