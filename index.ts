/**
 *
 * @param data ==> the data what you want to converted to tree
 * @param key ==> the unique key in the data
 * @param parentKey ==> the unique key of the parent node in the data
 * @returns
 */

export const toTree = <T>(data: T[], key?: string, parentKey?: string): T[] => {
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
