/**
 * True if A equals B
 * 
 * @example
 * type Good = Equal<number, number>
 * type Bad = Equal<number, string>
 */
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false
