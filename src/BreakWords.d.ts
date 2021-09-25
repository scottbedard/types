import { Alphabet } from './utils'
import { Equal } from './Equal'
import { Split } from './Split'

/**
 * Break a string by word break characters and casing.
 * 
 * @example
 * type Words = BreakWords<'one two-three_fourFive'> // ['one', 'two', 'three', 'four', 'Five']
 */
export type BreakWords<
  T extends string,
  Parts extends string[] = []
> = BreakParts<BreakChars<T>>

// break a string into parts
type BreakParts<
  Parts extends string[],
  Acc extends string[] = []
> = Parts extends [infer Head, ...infer Tail]
  ? BreakParts<Tail, [...Acc, ...BreakCase<Head>]>
  : Acc

// break words by non-letter characters
type BreakChars<T extends string> = Split<T, ['-', '_', ' ']>

// break words by case
type BreakCase<
  T extends string,
  CurrentWord extends string = '',
  Words extends string[] = [],
> = Equal<CurrentWord, ''> extends true
  ? T extends `${infer First}${infer Rest}`
    ? BreakCase<Rest, First, Words>
    : never
  : T extends `${infer First}${infer Rest}`
    ? First extends Alphabet
      ? BreakCase<Rest, `${CurrentWord}${First}`, Words>
      : BreakCase<T, '', [...Words, CurrentWord]>
    : [...Words, CurrentWord]