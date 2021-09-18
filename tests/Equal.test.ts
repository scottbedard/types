import { Equal, Expect } from '../index'

type Test1 = Expect<Equal<number, number>>

// @ts-expect-error
type Test2 = Expect<Equal<number, string>>
