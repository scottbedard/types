import { CamelCase } from './CamelCase'

/**
 * Camel case object keys.
 *
 * @example
 * type Obj = CamelCaseKeys<{ foo_bar: any }> // { fooBar: any }
 */
export type CamelCaseKeys<T> = T extends Record<string, any>
  ? { [K in keyof T as CamelCase<K>]: T[K] }
  : T
