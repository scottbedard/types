import {
  BreakWords,
  Equal,
  Expect,
} from './index'

describe('BreakWords', () => {
  it('explodes a string into parts', () => {
    type Test = Expect<Equal<['one', 'two', 'three', 'four', 'Five'], BreakWords<'one two-three_fourFive'>>>
  })
})
