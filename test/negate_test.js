import { negate } from '../src'
import { strictEqual } from 'assert'

describe('negate', () => {
  it('should return false if the predicate returns true', () => {
    strictEqual(negate(() => true)(), false)
  })

  it('should return true if the predicate returns false', () => {
    strictEqual(negate(() => false)(), true)
  })

  it('should return false if the predicate returns truey', () => {
    strictEqual(negate(() => 'ok')(), false)
    strictEqual(negate(() => 1)(), false)
  })

  it('should return true if the predicate returns falsey', () => {
    strictEqual(negate(() => 0)(), true)
    strictEqual(negate(() => undefined)(), true)
    strictEqual(negate(() => null)(), true)
  })

  it('should call the predicate with the arguments provided', () => {
    negate((a, b, c) => { strictEqual(a, 1); strictEqual(b, 2); strictEqual(c, 3) })(1, 2, 3)
  })

  it('should call the predicate with the correct "this" context', () => {
    const context = {}

    negate(predicate).call(context)

    function predicate () {
      strictEqual(this, context)
    }
  })
})
