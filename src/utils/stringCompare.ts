import { isNullish, isUndefined } from '@edsolater/fnkit'

export function isStringInsensitivelyEqual(s1: string | undefined, s2: string | undefined) {
  if (isUndefined(s1) || isUndefined(s2)) return false
  return s1.toLowerCase() === s2.toLowerCase()
}

export function isStringInsensitivelyContain(s1: string | undefined, s2: string | undefined) {
  if (isUndefined(s1) || isUndefined(s2)) return false
  return s1.toLowerCase().includes(s2.toLowerCase())
}
