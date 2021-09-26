import { PascalCase } from './index'

/**
 * Deeply Pascal case object keys.
 * 
 * @example
 * type Obj = PascalCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FooBar: { OneTwo: any }}
 */
export type PascalCaseKeysDeep<T> = T extends Array<infer U>
  ? PascalCaseKeysDeep<U>[]
  : T extends Record<string, any>
    ? { [K in keyof T as PascalCase<K>]: PascalCaseKeysDeep<T[K]> }
    : T
