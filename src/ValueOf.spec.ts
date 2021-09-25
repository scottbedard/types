import {
  Equal,
  Expect,
  ValueOf,
} from './index'

describe('ValueOf', () => {
  it('object', () => {
    type Test = Expect<Equal<number | string, ValueOf<{ foo: number, bar: string }>>>
  })
})
