import { toTree } from './index'
import { defaultField, resDefault, otherField, resOther } from './data'

describe('flat array to tree', () => {
  it('Passing null to the function', () => {
    expect(toTree(null)).toEqual([])
  })

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
