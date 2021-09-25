import {
  Equal,
  Expect,
} from './index'

describe('Equal', () => {
  it('same value', () => {
    type Test = Expect<Equal<true, true>>
  })

  it('different values', () => {
    // @ts-expect-error
    type Test = Expect<Equal<true, false>>
  })
})
