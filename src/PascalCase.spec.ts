import {
  Equal,
  Expect,
  PascalCase,
} from './index'

describe('PascalCase', () => {
  it('converts string to pascal case', () => {
    type FromCamel = Expect<Equal<'FooBarBaz', PascalCase<'fooBarBaz'>>>
    type FromKebab = Expect<Equal<'FooBarBaz', PascalCase<'foo-bar-baz'>>>
    type FromPascal = Expect<Equal<'FooBarBaz', PascalCase<'fooBarBaz'>>>
    type FromSnake = Expect<Equal<'FooBarBaz', PascalCase<'foo_bar_baz'>>>
  })
})
