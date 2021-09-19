import { Expect, Equal, Split } from '../src'

type Test1 = Expect<Equal<['a', 'b', 'c'], Split<'a-b-c', '-'>>>

type Test2 = Expect<Equal<['a', 'b', 'c'], Split<'abc'>>>

type Test3 = Expect<Equal<['a', 'b', 'c'], Split<'abc', ''>>>
