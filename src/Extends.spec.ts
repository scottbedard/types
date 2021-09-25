import {
  Equal,
  Expect,
  Extends,
} from './index'

describe('Extends', () => {
  it('A extends B', () => {
    type Test = Expect<Equal<true, Extends<'foo', string>>>
  })

  it('A does not extend B', () => {
    type Test = Expect<Equal<false, Extends<'bar', number>>>
  })
})
