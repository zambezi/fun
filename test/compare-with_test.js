import { deepEqual, strictEqual, throws } from 'assert'
import { compareWith } from '../src'
import { ascending } from 'd3-array'

describe('compare with', () => {

  it('should compare values with different criteria', () => {

    const second = (l) => l[1]
        , propComparator = compareWith(ascending, second)

    strictEqual(propComparator([1, 1, 1, 1], [1, 1, 1, 1]), 0)
    strictEqual(propComparator([1, 1, 1, 1], [1, 2, 1, 1]), -1)
    strictEqual(propComparator([1, 2, 1, 1], [1, 1, 1, 1]), 1)

  })

})
