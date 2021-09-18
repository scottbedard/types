import { Expect, Equal, SymmetricDifference } from '../src'

type Test1 = Expect<Equal<'a' | 'c', SymmetricDifference<'a' | 'b', 'b' | 'c'>>>
