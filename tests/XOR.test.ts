import { 
  Expect,
  Equal,
  XOR,
} from '../src'

/**
 * Acts as a union for primitive types
 */
type Test1 = Expect<Equal<XOR<1, 2>, 1 | 2>>

/**
 * Acts as exclusive or for objects
 */
type FooOrBar = XOR<{ foo: number }, { bar: number }>

const test2: FooOrBar = { foo: 1 }

const test3: FooOrBar = { bar: 1 }

// @ts-expect-error
const test4: FooOrBar = { foo: 1, bar: 1 }

/**
 * Allows for all-or-nothing style objects
 */
type AllOrNothing = XOR<{}, { a: number, b: number }>

const test5: AllOrNothing = {}

const test6: AllOrNothing = { a: 1, b: 1 }

// @ts-expect-error
const test7: AllOrNothing = { a: 1 }

// @ts-expect-error
const test8: AllOrNothing = { b: 1 }
