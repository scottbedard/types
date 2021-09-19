import { Expect, Equal, Split } from '../src'

type Test1 = Expect<Equal<['a', 'b', 'c'], Split<'a-b-c', '-'>>>
