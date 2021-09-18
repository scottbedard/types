import { Difference, Expect, Equal } from '../src'

type LeftSet = 'a' | 'b'

type RightSet = 'b' | 'c'

type LeftObj = { a: any, b: number }

type RightObj = { b: string, c: any }

/**
 * Difference of sets
 */
 type Test1 = Expect<Equal<'a', Difference<LeftSet, RightSet>>>

/**
 * Difference of objects
 */
type Test2 = Expect<Equal<{ a: any }, Difference<LeftObj, RightObj>>>

/**
 * Mixed difference results in never
 */
 type Test3 = Expect<Equal<never, Difference<LeftObj, RightSet>>>

 type Test4 = Expect<Equal<never, Difference<LeftSet, RightObj>>>
 