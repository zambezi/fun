import { strictEqual, deepEqual } from 'assert'
import { replaceArrayContents } from '../src'

describe('replace array contents', () => {
  it('should change all the elements of an array', () => {
    const before = [ 1, 2, 3 ]
    const after = [ 4, 5, 6 ]

    replaceArrayContents(before, after)

    deepEqual(before, after)
  })

  it('should return the original array reference', () => {
    const a = [ 1, 2, 3 ]
    strictEqual(replaceArrayContents(a, [ 4, 5, 6 ]), a)
  })
})
