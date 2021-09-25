import { 
  Expect,
  NotEqual,
} from './index'



describe('NotEqual', () => {
  it('different values', () => {
    type Test = Expect<NotEqual<true, false>>
  })

  it('same value', () => {
    // @ts-expect-error
    type Test = Expect<NotEqual<true, true>>
  })
})
