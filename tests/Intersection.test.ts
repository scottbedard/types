import { Expect, Equal, Intersection } from '../src'

type Foo = { a: number, b: number }
type Bar = { b: string, c: any }

type Test1 = Expect<Equal<{ b: number }, Intersection<Foo, Bar>>>
