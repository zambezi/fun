import { strictEqual } from 'assert'
import { identity } from '../src'

describe('identity', () => {
  it('should return the same value that was passed as first argument', () => {

    const a = {}
    strictEqual(identity(a), a)
    strictEqual(identity('a'), 'a')
    strictEqual(identity(1, 2), 1)
    strictEqual(identity(null), null)
    strictEqual(identity(undefined), undefined)
    strictEqual(identity(true), true)
    strictEqual(isNaN(identity(NaN)), true)

  })

})
