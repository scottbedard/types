import {
  Expect,
  Equal,
  Not,
} from './index'

describe('Not', () => {
  it('true to false', () => {
    type Test = Expect<Equal<true, Not<false>>>
  })

  it('false to true', () => {
    type Test = Expect<Equal<false, Not<true>>>
  })
})
