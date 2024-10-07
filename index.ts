/**
 * Converts a flat array structure to a tree structure.
 *
 * @param data - The array of data to be converted into a tree structure.
 * @param key - The property name used as the unique identifier for each item (default: 'id').
 * @param parentKey - The property name that references the parent's identifier (default: 'pid').
 * @returns An array representing the tree structure.
 */
export const toTree = <T> (data: T[], key?: string, parentKey?: string): T[] => {
  const idProps = key || 'id'
  const pidProps = parentKey || 'pid'

  if (!data || data.length <= 0) return []

  // define the last returned data
  const result = []
  const map = new Map()

  for (const item of data) {
    map.set(item[idProps], { ...item, children: [] })
  }

  for (const item of data) {
    const id = item[idProps]
    const pid = item[pidProps]
    if (map.get(pid)) {
      map.get(pid).children.push(map.get(id))
    } else {
      result.push(map.get(id))
    }
  }
  return result
}
