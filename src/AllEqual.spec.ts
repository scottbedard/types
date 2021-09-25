import {
  AllEqual,
  Equal,
  Expect,
} from './index'

describe('AllEqual', () => {
  it('true', () => {
    type Test = Expect<AllEqual<[1, 1, 1], 1>>
  })

  it('false', () => {
    type Test = Expect<Equal<false, AllEqual<[1, 1, 2], 1>>>
  })

  it('empty array', () => {
    type Test = Expect<AllEqual<[], true>>
  })
})
