import { deepEqual } from 'assert'
import { trampoline, trampolineMergeSort } from '../src'
import { descending } from 'd3-array'

describe('trampoline merge sort', () => {
  it('should sort a collection ', () => {
    const a = [ 4, 2, 1, 0, 100 ]
    const b = [ 0, 1, 2, 4, 100 ]

    deepEqual(trampoline(trampolineMergeSort, a), b)
  })

  it('should accept a custom comparator function', () => {
    const a = [ 4, 2, 1, 0, 100 ]
    const b = [ 100, 4, 2, 1, 0 ]

    deepEqual(trampoline(trampolineMergeSort, a, descending), b)
  })
})
