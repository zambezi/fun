import { trampoline } from '../src'
import { strictEqual } from 'assert'

describe('trampoline', () => {
  it('should call a function recursively if it returns a function', () => {
    let called = 0

    trampoline(f, 1)
    strictEqual(called, 10)

    function f (v) {
      called++
      if (v === 10) return 'ok-10'
      return () => f(v + 1)
    }
  })

  it('should return the returned value when it first becomes a non-function', () => {
    strictEqual(trampoline(f, 1), 'ok-10')

    function f (v) {
      if (v === 10) return 'ok-10'
      return () => f(v + 1)
    }
  })

  it('should immediately return the value if passed a non-function', () => {
    strictEqual(trampoline('a'), 'a')
    strictEqual(trampoline(null), null)
    strictEqual(trampoline(false), false)
    strictEqual(trampoline(undefined), undefined)
  })
})
