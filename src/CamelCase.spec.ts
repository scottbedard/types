import {
  CamelCase,
  Equal,
  Expect,
} from './index'

describe('CamelCase', () => {
  it('converts string to camel case', () => {
    type FromCamel = Expect<Equal<'fooBarBaz', CamelCase<'fooBarBaz'>>>
    type FromKebab = Expect<Equal<'fooBarBaz', CamelCase<'foo-bar-baz'>>>
    type FromPascal = Expect<Equal<'fooBarBaz', CamelCase<'fooBarBaz'>>>
    type FromSnake = Expect<Equal<'fooBarBaz', CamelCase<'foo_bar_baz'>>>
  })
})
