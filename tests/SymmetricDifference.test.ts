import { Expect, Equal, SymmetricDifference } from '../src'

type LeftSet = 'a' | 'b'

type RightSet = 'b' | 'c'

type LeftObj = { a: any, b: number }

type RightObj = { b: string, c: any }

/**
 * Symmetric difference of sets
 */
type Test1 = Expect<Equal<'a' | 'c', SymmetricDifference<LeftSet, RightSet>>>

/**
 * Symmetric difference of objects
 */
type Test2 = Expect<Equal<{ a: any, c: any }, SymmetricDifference<LeftObj, RightObj>>>

/**
 * Mixed difference results in never
 */
type Test3 = Expect<Equal<never, SymmetricDifference<LeftObj, RightSet>>>

type Test4 = Expect<Equal<never, SymmetricDifference<LeftSet, RightObj>>>
