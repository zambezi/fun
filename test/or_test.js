import { strictEqual } from 'assert'
import { or } from '../src'

describe('or', ()=> {

  it('should return true if 14 is divisible by 2 or 7', () => {
    strictEqual(or(divisibleBy2, divisibleBy7)(14), true)
  })

  it('should return true if 2 is divisible by 2 or 7', () => {
    strictEqual(or(divisibleBy2, divisibleBy7)(2), true)
  })

  it('should return false if 5 is divisible by 2 or 7', () => {
    strictEqual(or(divisibleBy2, divisibleBy7)(5), false)
  })

  function divisibleBy2(d) {
    return d % 2 == 0
  }

  function divisibleBy7(d) {
    return d % 7 == 0
  }
})
