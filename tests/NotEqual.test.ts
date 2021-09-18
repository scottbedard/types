import { Expect, NotEqual } from '../src'

type Test1 = Expect<NotEqual<true, false>>

// @ts-expect-error
type Test2 = Expect<NotEqual<true, true>>
