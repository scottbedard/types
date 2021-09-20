# `@bedard/types`

[![Test status](https://img.shields.io/github/workflow/status/scottbedard/types/Test)](https://github.com/scottbedard/types/actions/workflows/test.yml)
[![Dependencies](https://img.shields.io/david/scottbedard/types)](https://david-dm.org/scottbedard/types)
[![Dev dependencies](https://img.shields.io/david/dev/scottbedard/types)](https://david-dm.org/scottbedard/types?type=dev)
[![NPM](https://img.shields.io/npm/v/@bedard/types)](https://www.npmjs.com/package/@bedard/types)
[![License](https://img.shields.io/github/license/scottbedard/types?color=blue)](https://github.com/scottbedard/types/blob/main/LICENSE)

The goal of this package is to act as an extension to Typescript's built-in utility types. There is currently no runtime, but that may change if type guards are added. I don't anticipate breaking changes, but with that said this is mainly for personal use, so upgrade with caution.

## Installation

The recommended way to install this package is through NPM.

```bash
npm install @bedard/types
```

## Utility types

- [`Difference<A, B>`](#differencea-b)
- [`Equal<A, B>`](#equala-b)
- [`Expect<T>`](#expectt)
- [`Intersection<A, B>`](#intersectiona-b)
- [`Join<Parts, Delimeter>`](#joinparts-delimeter)
- [`NotEqual<A, B>`](#notequala-b)
- [`Pop`](#popt)
- [`Shift<T>`](#shiftt)
- [`Split<Source, Delimeter>`](#splitsource-delimeter)
- [`SymmetricDifference<A, B>`](#symmetricdifferencea-b)
- [`ValueOf<T>`](#valueoft)
- [`Without<A, B>`](#withouta-b)
- [`XOR<A, B>`](#xora-b)

### `Difference<A, B>`

Elements of `A` that are not elements of `B`. For unions, this is the same as the [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion) utility.

```ts
import { Difference } from '@bedard/types'

type Left = Difference<{ a: any, b: any }, { b: any, c: any }> // { a: any }
```

### `Equal<A, B>`

Types `true` if `A` and `B` are equal. This is mainly used with [`Expect`](#expect) to verify that types are working as expected. See [`NotEqual`](#notequal) for the inverse of this type.

```ts
import { Expect, Equal } from '@bedard/types'

type Test = Expect<Equal<number, number>>
```

### `Expect<T>`

Verify that `T` is `true`. This allows for assertions to be made using the type system. See [`Equal`](#equal) and [`NotEqual`](#notequal) for more usage examples.

```ts
import { Expect } from '@bedard/types'

type Test = Expect<true>
```

### `Intersection<A, B>`

The [intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory)) of `A` and `B`, giving preference to `A`.

```ts
import { Intersection } from '@bedard/types'

type Shared = Intersection<{ a: any, b: number }, { c: string, d: any }> // { b: number }
```

### `Join<Parts, Delimeter>`

Join `Parts` by `Delimeter`. This type is the opposite of [`Split`](#splitsource-delimeter).

```ts
import { Join } from '@bedard/types'

type Str = Join<['a', 'b', 'c']> // 'abc'

type Parts = Join<['a', 'b', 'c'], '.'> // 'a.b.c'
```

### `NotEqual<A, B>`

Types `true` if `A` does not equal `B`. This type is mainly used with [`Expect`](#expect) to verify that types are working as expected. See [`Equal`](#equal) for the inverse of this type.

```ts
import { Expect, NotEqual } from '@bedard/types'

type Test = Expect<NotEqual<number, string>>
```

### `Pop<T>`

Remove the last element of `T`.

```ts
import { Pop } from '@bedard/types'

type Items = Pop<['foo', 'bar', 'baz']> // ['foo', 'bar']
```

### `Shift<T>`

Remove the first element of `T`.

```ts
import { Shift } from '@bedard/types'

type Items = Shift<['foo', 'bar', 'baz']> // ['bar', 'baz']
```

### `Split<Source, Delimeter>`

Split `Source` by `Delimeter`. This type is the opposite of [`Join`](#joinparts-delimeter).

```ts
import { Split } from '@bedard/types'

type Characters = Split<'abc'> // ['a', 'b', 'c']

type Parts = Split<'a.b.c', '.'> // ['a', 'b', 'c']
```

### `SymmetricDifference<A, B>`

The [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) of `A` and `B`.

```ts
import { SymmetricDifference } from '@bedard/types'

type OuterSet = SymmetricDifference<'a' | 'b', 'b' | 'c'> // 'a' | 'c'

type OuterObj= SymmetricDifference<{ a: any, b: any }, { b: any, c: any }> // { a: any, c: any }
```

### `ValueOf<T>`

Generate a union from the values of `T`. This can be thought of as an opposite to the [`keyof`](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html) operator.

```ts
import { ValueOf } from '@bedard/types'

type Values = ValueOf<{ foo: number, bar: string }> // number | string
```

### `Without<A, B>`

Prohibit properties of `A` and omit properties of `B`.

```ts
import { Without } from '@bedard/types'

type FooWithoutBar = Without<{ foo: any, bar: any }, { bar: any }> // { foo?: never }
```

### `XOR<A, B>`

Create an [exclusive or](https://en.wikipedia.org/wiki/Exclusive_or) between two types. Note that for objects, this differs from a union type in that keys are strictly matched.

```ts
import { XOR } from '@bedard/types'

type FooOrBar = XOR<{ foo: any }, { bar: any }>

const a: FooOrBar = { foo } // pass
const b: FooOrBar = { bar } // pass
const c: FooOrBar = { foo, bar } // fail
```

## License

[MIT](https://github.com/scottbedard/types/blob/main/LICENSE)
