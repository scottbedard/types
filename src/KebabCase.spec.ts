import {
  Equal,
  Expect,
  KebabCase,
} from './index'

describe('KebabCase', () => {
  it('converts string to kebab case', () => {
    type FromCamel = Expect<Equal<'foo-bar-baz', KebabCase<'fooBarBaz'>>>
    type FromKebab = Expect<Equal<'foo-bar-baz', KebabCase<'foo-bar-baz'>>>
    type FromPascal = Expect<Equal<'foo-bar-baz', KebabCase<'fooBarBaz'>>>
    type FromSnake = Expect<Equal<'foo-bar-baz', KebabCase<'foo_bar_baz'>>>
  })
})
