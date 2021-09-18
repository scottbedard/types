/**
 * Generate a union from the values of `T`.
 *
 * @example
 * ValuesOf<{ foo: number, bar: string }> // number | string
 */
export type ValueOf<T extends object> = T[keyof T]
