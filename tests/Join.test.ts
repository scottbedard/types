import {
  Equal,
  Expect,
  Join,
} from '../src'

type Test1 = Expect<Equal<'abc', Join<['a', 'b', 'c']>>>

type Test2 = Expect<Equal<'abc', Join<['a', 'b', 'c'], ''>>>

type Test3 = Expect<Equal<'a.b.c', Join<['a', 'b', 'c'], '.'>>>

type Test4 = Expect<Equal<'', Join<[]>>>

type Test5 = Expect<Equal<'', Join<[], 'whatever'>>>