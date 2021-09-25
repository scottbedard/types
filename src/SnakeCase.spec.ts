import {
  Equal,
  Expect,
  SnakeCase,
} from './index'

describe('SnakeCase', () => {
  it('converts string to snake case', () => {
    type FromCamel = Expect<Equal<'foo_bar_baz', SnakeCase<'fooBarBaz'>>>
    type FromKebab = Expect<Equal<'foo_bar_baz', SnakeCase<'foo-bar-baz'>>>
    type FromPascal = Expect<Equal<'foo_bar_baz', SnakeCase<'fooBarBaz'>>>
    type FromSnake = Expect<Equal<'foo_bar_baz', SnakeCase<'foo_bar_baz'>>>
  })
})
