import { 
  Equal,
  Expect,
  XOR,
} from './index'

describe('XOR', ()  => {
  it('acts as a union for primitive types', () => {
    type Test = Expect<Equal<XOR<1, 2>, 1 | 2>>
  })

  it('acts as exclusive or for objects', () => {
    type FooOrBar = XOR<{ foo: number }, { bar: number }>

    const test1: FooOrBar = { foo: 1 }

    const test2: FooOrBar = { bar: 1 }

    // @ts-expect-error
    const test3: FooOrBar = { foo: 1, bar: 1 }
  })

  it('allows for all-or-nothing objects', () => {
    type AllOrNothing = XOR<{}, { a: number, b: number }>

    const test1: AllOrNothing = {}

    const test2: AllOrNothing = { a: 1, b: 1 }

    // @ts-expect-error
    const test3: AllOrNothing = { a: 1 }

    // @ts-expect-error
    const test4: AllOrNothing = { b: 1 }
  })
})
