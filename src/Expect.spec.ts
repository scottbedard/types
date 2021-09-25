import { Expect } from './index'

describe('Expect', () => {
  it('true', () => {
    type Test = Expect<true>
  })

  it('false', () => {
    // @ts-expect-error
    type Test = Expect<false>
  })
})
