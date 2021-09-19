import {
  Equal,
  Expect,
  Shift,
} from '../src'

type Test1 = Expect<Equal<[], Shift<[]>>>

type Test2 = Expect<Equal<[], Shift<[1]>>>

type Test3 = Expect<Equal<[2, 3, 4], Shift<[1, 2, 3, 4]>>>
