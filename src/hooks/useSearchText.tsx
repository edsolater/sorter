import { toStringOrUndefined } from '@edsolater/fnkit'
import { Dispatch, SetStateAction, useState } from 'react'
import { SearchOptions, searchItems } from '../core/search'

/**
 *  if component is controlled, just use {@link searchItems}
 *
 * @param items
 * @param options
 * @returns
 */
export function useSearchText<T>(
  items: T[],
  options?: SearchOptions<T> & {
    defaultSearchText?: string | number /* for uncontrolled component */
  }
): {
  searched: T[]
  searchText: string | undefined /* for uncontrolled component */
  setSearchText: Dispatch<SetStateAction<string | undefined>> /* for uncontrolled component */
} {
  const [searchText, setSearchText] = useState(toStringOrUndefined(options?.defaultSearchText))
  const searched = searchItems(items, { ...options, text: searchText })
  return { searched, searchText, setSearchText }
}
