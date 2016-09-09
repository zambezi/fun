import { trampoline, trampolineFilter } from '../src'
import { deepEqual } from 'assert'

describe('trampoline filter', () => {
  it('should filter a collection when run on a trampoline', () => {
    const a = [ 1, 2, 3, 4, 5, 6, 7 ]
    deepEqual(trampoline(trampolineFilter, a, d => d % 2), [ 1, 3, 5, 7 ])
  })
})
