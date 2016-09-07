import { modulo } from '../src'
import { strictEqual } from 'assert'

describe('modulo', ()=> {

  it('should return modulo with the same sign as the divisor', ()=> {
      strictEqual(modulo(-1, 100), 99)
      strictEqual(modulo(1, 100), 1)
      strictEqual(modulo(4, 3), 1)
      strictEqual(modulo(-4, -3), -1)
  })

})
