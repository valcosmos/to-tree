import { toTree } from '@valcosmos/to-tree'
import { describe, it, expect } from 'vitest'
import { defaultField, resDefault, otherField, resOther } from './data'

describe('flat array to tree', () => {

  it('Passing an empty array to the function', () => {
    expect(toTree([])).toEqual([])
  })

  it('Passing flattened array to the function', () => {
    // default data
    expect(toTree(defaultField)).toMatchObject(resDefault)

    // reset field
    expect(toTree(otherField,'_id', 'parentId')).toMatchObject(resOther)
  })
})
