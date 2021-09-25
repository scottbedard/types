import { BreakWords } from './BreakWords'
import { Join } from './Join'
import { MapLowercase } from './MapLowercase'

/**
 * Convert a string to snake case.
 * 
 * @example
 * type Str = SnakeCase<'fooBar'> // 'foo_bar'
 */
export type SnakeCase<T extends string> = Join<MapLowercase<BreakWords<T>>, '_'>
