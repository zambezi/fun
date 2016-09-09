import { strictEqual, throws } from 'assert'
import { batch } from '../src'

describe('batch', () => {
  it('should run all the functions', () => {
    const c = counter()
    strictEqual(batch(c, c, c)(), 3)
    function counter() {
      let count = 0
      return function() {
        return ++count
      }
    }
  })

  it('should throw if any parameter is not a function', () => {
    throws(() => {
      batch(()=> 1 + 2, '(x_x)', () => console.log('ko'))()
    })
  })

  it('should pass the argument to all the batched functions', () => {
    batch(
      (d) => strictEqual(d, 666)
    , (d) => strictEqual(d, 666)
    , (d) => strictEqual(d, 666)
    , (d) => strictEqual(d, 666)
    )(666)
  })

  it('should return the result of the last function', () => {
    strictEqual(
      batch(
        (d) => d * d
      , (d) => d + 1
      , (d) => d * 5
      )(10)
    , 50
    )
  })

})
