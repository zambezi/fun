import { strictEqual } from 'assert'
import { and } from '../src'

describe('and', ()=> {

  it('should return true if 14 is divisible by 2 and 7', () => {
    strictEqual(and(divisibleBy2, divisibleBy7)(14), true)
  })

  it('should return false if 2 is divisible by 2 and 7', () => {
    strictEqual(and(divisibleBy2, divisibleBy7)(2), false)
  })

  function divisibleBy2(d) {
    return d % 2 == 0
  }

  function divisibleBy7(d) {
    return d % 7 == 0
  }

})
