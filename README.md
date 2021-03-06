> ## This library is deprecated, please use [`@bedard/utils`](https://github.com/scottbedard/utils) instead.

# `@bedard/types`

[![Test status](https://img.shields.io/github/workflow/status/scottbedard/types/Test)](https://github.com/scottbedard/types/actions/workflows/test.yml)
[![NPM](https://img.shields.io/npm/v/@bedard/types)](https://www.npmjs.com/package/@bedard/types)
[![License](https://img.shields.io/github/license/scottbedard/types?color=blue)](https://github.com/scottbedard/types/blob/main/LICENSE)

The goal of this package is to act as an extension to Typescript's built-in utility types. There is currently no runtime, but that may change if type guards are added. I don't anticipate breaking changes, but with that said this is mainly for personal use, so upgrade with caution.

## Installation

The recommended way to install this package is through NPM.

```bash
npm install @bedard/types
```

## Utility types

- [`AllEqual<Sources, Value>`](#allequalsources-value)
- [`BreakWords<T>`](#breakwordst)
- [`CamelCase<T>`](#camelcaset)
- [`CamelCaseKeys<T>`](#camelcasekeyst)
- [`CamelCaseKeysDeep<T>`](#camelcasekeysdeept)
- [`Difference<A, B>`](#differencea-b)
- [`Equal<A, B>`](#equala-b)
- [`Expect<T>`](#expectt)
- [`Extends<A, B>`](#extendsa-b)
- [`First<T>`](#firstt)
- [`Intersection<A, B>`](#intersectiona-b)
- [`Join<Parts, Delimeter>`](#joinparts-delimeter)
- [`KebabCase<T>`](#kebabcaset)
- [`KebabCaseKeys<T>`](#kebabcasekeyst)
- [`KebabCaseKeysDeep<T>`](#kebabcasekeysdeept)
- [`Last<T>`](#lastt)
- [`MapCapitalize<T>`](#mapcapitalizet)
- [`MapLowercase<T>`](#maplowercaset)
- [`MapUppercase<T>`](#mapuppercaset)
- [`Not<T>`](#nott)
- [`NotEqual<A, B>`](#notequala-b)
- [`Opaque<T, Token>`](#opaquet-token)
- [`PascalCase<T>`](#pascalcaset)
- [`PascalCaseKeys<T>`](#pascalcasekeyst)
- [`PascalCaseKeysDeep<T>`](#pascalcasekeysdeept)
- [`Pop<T>`](#popt)
- [`ScreamingSnakeCase<T>`](#screamingsnakecaset)
- [`ScreamingSnakeCaseKeys<T>`](#screamingsnakecasekeyst)
- [`ScreamingSnakeCaseKeysDeep<T>`](#screamingsnakecasekeysdeept)
- [`Shift<T>`](#shiftt)
- [`SnakeCase<T>`](#snakecaset)
- [`SnakeCaseKeys<T>`](#snakecasekeyst)
- [`SnakeCaseKeysDeep<T>`](#snakecasekeysdeept)
- [`Split<Source, Delimeter>`](#splitsource-delimeter)
- [`SymmetricDifference<A, B>`](#symmetricdifferencea-b)
- [`Transparent<T>`](#transparentt)
- [`ValueOf<T>`](#valueoft)
- [`Without<A, B>`](#withouta-b)
- [`XOR<A, B>`](#xora-b)

### `AllEqual<Sources, Value>`

Types `true` if all `Sources` equal `Value`.

```ts
import { AllEqual } from '@bedard/types'

type Good = AllEqual<[1, 1], 1> // true
type Bad = AllEqual<[1, 2], 1> // false
```

### `BreakWords<T>`

Explode a string by common word breaks. This currently includes spaces, hyphens, underscores, and casing changes.

```ts
import { BreakWords } from '@bedard/types'

type Words = BreakWords<'one twoThree-four'> // ['one', 'two', 'Three', 'four']
```

### `CamelCase<T>`

Convert a string to camel case.

```ts
import { CamelCase } from '@bedard/types'

type Str = CamelCase<'foo-bar'> // 'fooBar'
```

### `CamelCaseKeys<T>`

Camel case object keys.

```ts
import { CamelCaseKeys } from '@bedard/types'

type Obj = CamelCaseKeys<{ foo_bar: any }> // { fooBar: any }
```

### `CamelCaseKeysDeep<T>`

Deeply camel case object keys.

```ts
import { CamelCaseKeysDeep } from '@bedard/types'

type Obj = CamelCaseKeysDeep<{ foo_bar: { one_two: any }}> // { fooBar: { oneTwo: any }}
```

### `Difference<A, B>`

Elements of `A` that are not elements of `B`. For unions, this is the same as the [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion) utility.

```ts
import { Difference } from '@bedard/types'

type Left = Difference<{ a: any, b: any }, { b: any, c: any }> // { a: any }
```

### `Equal<A, B>`

Types `true` if `A` and `B` are equal. This is mainly used with [`Expect`](#expectt) to verify that types are working as expected. See [`NotEqual`](#notequala-b) for the inverse of this type.

```ts
import { Expect, Equal } from '@bedard/types'

type Test = Expect<Equal<number, number>>
```

### `Expect<T>`

Verify that `T` is `true`. This allows for assertions to be made using the type system. See [`Equal`](#equala-b) and [`NotEqual`](#notequala-b) for more usage examples.

```ts
import { Expect } from '@bedard/types'

type Test = Expect<true>
```

### `Extends<A, B>`

Types `true` if `A` extends `B`.

```ts
import { Extends } from '@bedard/types'

type Test = Extends<'foo', string> // true
```

### `First<T>`

Extract the first element of a string or array.

```ts
import { First } from '@bedard/types'

type FirstChar = First<'abc'> // 'a'
type FirstItem = First<[1, 2, 3]>, // 1
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

### `KebabCase<T>`

Convert a string to kebab case.

```ts
import { KebabCase } from '@bedard/types'

type Str = KebabCase<'fooBar'> // 'foo-bar'
```

### `KebabCaseKeys<T>`

Kebab case object keys.

```ts
import { KebabCaseKeys } from '@bedard/types'

type Obj = KebabCaseKeys<{ foo_bar: any }> // { 'foo-bar': any }
```

### `KebabCaseKeysDeep<T>`

Deeply kebab case object keys.

```ts
import { KebabCaseKeysDeep } from '@bedard/types'

type Obj = KebabCaseKeysDeep<{ foo_bar: { one_two: any }}> // { 'foo-bar': { 'one-two': any }}
```

### `Last<T>`

Extract the last element of a string or array.

```ts
import { Last } from '@bedard/types'

type LastChar = Last<'abc'> // 'c'
type LastItem = Last<[1, 2, 3]>, // 3
```

### `MapCapitalize<T>`

Capitalize the first letter of each string.

```ts
import { MapCapitalize } from '@bedard/types'

type Capitalized = MapLowercase<['foo', 'bar']> // ['Foo', 'Bar']
```

### `MapLowercase<T>`

Map strings to lowercase.

```ts
import { MapLowercase } from '@bedard/types'

type Lower = MapLowercase<['A', 'B']> // ['a', 'b']
```

### `MapUppercase<T>`

Map strings to uppercase.

```ts
import { MapUppercase } from '@bedard/types'

type Upper = MapUppercase<['a', 'b']> // ['A', 'B']
```

### `Not<T>`

Reverse the boolean value of `T`.

```ts
import { Not } from '@bedard/types'

type Test = Not<true> // false
```

### `NotEqual<A, B>`

Types `true` if `A` does not equal `B`. This type is mainly used with [`Expect`](#expectt) to verify that types are working as expected. See [`Equal`](#equala-b) for the inverse of this type.

```ts
import { Expect, NotEqual } from '@bedard/types'

type Test = Expect<NotEqual<number, string>>
```

### `Opaque<T, Token>`

[Opaque type](https://en.wikipedia.org/wiki/Opaque_data_type) `T` with an optional `Token`. For more on opaque types, [this article](https://codemix.com/opaque-types-in-javascript) is a great place to start.

```ts
import { Opaque } from '@bedard/types'

type USD = Opaque<number, 'usd'>

const dollars = 5 as USD
```

### `PascalCase<T>`

Convert a string to pascal case.

```ts
import { PascalCase } from '@bedard/types'

type Str = PascalCase<'foo-bar'> // 'FooBar'
```

### `PascalCaseKeys<T>`

Kebab case object keys.

```ts
import { PascalCaseKeys } from '@bedard/types'

type Obj = PascalCaseKeys<{ foo_bar: any }> // { 'foo-bar': any }
```

### `PascalCaseKeysDeep<T>`

Deeply pascal case object keys.

```ts
import { PascalCaseKeysDeep } from '@bedard/types'

type Obj = PascalCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FooBar: { OneTwo: any }}
```

### `Pop<T>`

Remove the last element of `T`.

```ts
import { Pop } from '@bedard/types'

type Items = Pop<['foo', 'bar', 'baz']> // ['foo', 'bar']
```

### `ScreamingSnakeCase<T>`

Convert a string to screaming snake case.

```ts
import { ScreamingSnakeCase } from '@bedard/types'

type Str = ScreamingSnakeCase<'fooBar'> // 'FOO_BAR'
```

### `ScreamingSnakeCaseKeys<T>`

Screaming snake case object keys.

```ts
import { ScreamingSnakeCaseKeys } from '@bedard/types'

type Obj = ScreamingSnakeCaseKeys<{ foo_bar: any }> // { FOO_BAR: any }
```

### `ScreamingSnakeCaseKeysDeep<T>`

Deeply screaming snake case object keys.

```ts
import { ScreamingSnakeCaseKeysDeep } from '@bedard/types'

type Obj = ScreamingSnakeCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FOO_BAR: { ONE_TWO: any }}
```

### `Shift<T>`

Remove the first element of `T`.

```ts
import { Shift } from '@bedard/types'

type Items = Shift<['foo', 'bar', 'baz']> // ['bar', 'baz']
```

### `SnakeCase<T>`

Convert a string to snake case.

```ts
import { SnakeCase } from '@bedard/types'

type Str = SnakeCase<'fooBar'> // 'foo_bar'
```

### `SnakeCaseKeys<T>`

Snake case object keys.

```ts
import { SnakeCaseKeys } from '@bedard/types'

type Obj = SnakeCaseKeys<{ fooBar: any }> // { foo_bar: any }
```

### `SnakeCaseKeysDeep<T>`

Deeply snake case object keys.

```ts
import { SnakeCaseKeysDeep } from '@bedard/types'

type Obj = SnakeCaseKeysDeep<{ fooBar: { oneTwo: any }}> // { foo_bar: { one_two: any }}
```

### `Split<Source, Delimeter>`

Split `Source` by `Delimeter`. This type is the opposite of [`Join`](#joinparts-delimeter). Note that to split by multiple delimeters the second argument must be a `string[]`, as unions will create a [distributive conditional type](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types).

```ts
import { Split } from '@bedard/types'

type Characters = Split<'abc'> // ['a', 'b', 'c']

type SingleDelimeter = Split<'a.b.c', '.'> // ['a', 'b', 'c']

type MultipleDelimeters = Split<'a.b-c', ['.', '-']> // ['a', 'b', 'c']
```

### `SymmetricDifference<A, B>`

The [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) of `A` and `B`.

```ts
import { SymmetricDifference } from '@bedard/types'

type OuterSet = SymmetricDifference<'a' | 'b', 'b' | 'c'> // 'a' | 'c'

type OuterObj= SymmetricDifference<{ a: any, b: any }, { b: any, c: any }> // { a: any, c: any }
```

### `Transparent<T>`

A type that does not encode any additional data. This type the inverse of [`Opaque<T>`](#opaquet-token).

```ts
import { Transparent } from '@bedard/types'

type NonOpaqueString = Transparent<string>
```

### `ValueOf<T>`

Generate a union from the values of `T`.

```ts
import { ValueOf } from '@bedard/types'

type ArrayValues = ValueOf<Array<string>> // string

type ObjectValues = ValueOf<{ foo: number, bar: string }> // number | string
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
