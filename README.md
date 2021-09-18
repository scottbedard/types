# `@bedard/types`

[![Test status](https://img.shields.io/github/workflow/status/scottbedard/types/Test)](https://github.com/scottbedard/types/actions/workflows/test.yml)
[![Dependencies](https://img.shields.io/david/scottbedard/types)](https://david-dm.org/scottbedard/types)
[![Dev dependencies](https://img.shields.io/david/dev/scottbedard/types)](https://david-dm.org/scottbedard/types?type=dev)
[![License](https://img.shields.io/github/license/scottbedard/types?color=blue)](https://github.com/scottbedard/types/blob/main/LICENSE)

The goal of this package is to act as an extension to Typescript's built-in utility types. There is currently no runtime, but that may change if type guards are added. I don't anticipate breaking changes, but with that said this is mainly for personal use, so upgrade with caution.

## Installation

The recommended way to install this package is through NPM.

```bash
npm install @bedard/types
```

## Utility types

- [`Equal<A, B>`](#equal)
- [`Expect`](#expect)
- [`NotEqual`](#notequal)
- `Without`
- `XOR`

<h3 id="equal"><code>Equal&lt;A, B&gt;</code></h3>

Types `true` if `A` and `B` are equal. This is mainly used with [`Expect`](#expect) to verify that types are working as expected. See [`NotEqual`](#notequal) for the inverse of this type.

```ts
import { Expect, Equal } from '@bedard/types'

type Test = Expect<Equal<number, number>>
```

<h3><a name="expect"><code>Expect<T></code></a></h3>

Verify that `T` is `true`. This allows for assertions to be made using the type system. See [`Equal`](#equal) and [`NotEqual`](#notequal) for more usage examples.

```ts
import { Expect } from '@bedard/types'

type Test = Expect<true>
```

<h3><a name="notequal"><code>NotEqual<A, B></code></a></h3>

Types `true` if `A` does not equal `B`. This type is mainly used with [`Expect`](#expect) to verify that types are working as expected. See [`Equal`](#equal) for the inverse of this type.

```ts
import { Expect, NotEqual } from '@bedard/types'

type Test = Expect<NotEqual<number, string>>
```

### `Without<A, B>`

Soon...

### `XOR<A, B>`

Soon...
