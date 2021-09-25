import { 
  Equal,
  Expect,
  Intersection,
} from './index'

describe('Intersection', () => {
  type Foo = { a: number, b: number }

  type Bar = { b: string, c: any }

  it('intersects objects', () => {
    type Test = Expect<Equal<{ b: number }, Intersection<Foo, Bar>>>
  })
})
