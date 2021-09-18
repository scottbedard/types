import { 
  Equal,
  Expect,
  Without,
} from '../index'

type Foo = { a: any, b: any }

type Bar = { b: any, c: any }

type Test1 = Expect<Equal<{ a?: never }, Without<Foo, Bar>>>