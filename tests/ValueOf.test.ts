import { Expect, Equal, ValueOf } from '../src'

type Test1 = Expect<Equal<number | string, ValueOf<{ foo: number, bar: string }>>>
