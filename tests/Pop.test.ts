import {
  Equal,
  Expect,
  Pop,
} from '../src'

type Test1 = Expect<Equal<[], Pop<[]>>>

type Test2 = Expect<Equal<[], Pop<[1]>>>

type Test3 = Expect<Equal<[1, 2, 3], Pop<[1, 2, 3, 4]>>>
