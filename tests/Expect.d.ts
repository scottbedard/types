import { Expect } from '../index'

type Test1 = Expect<true>

// @ts-expect-error
type Test2 = Expect<false>
