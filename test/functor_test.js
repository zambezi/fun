import { deepEqual, strictEqual, throws } from 'assert'
import { functor } from '../src'


describe('functor', () => {

  it('should return the argument function when a function is passed', ()=> {
    strictEqual(typeof(functor(noop)), 'function')
    strictEqual(functor(noop), noop)
  })

  it('should return a function that will return the original argument when a non function is passed', () => {

    const a = { }

    strictEqual(functor(a)(), a)
    strictEqual(functor('a')(), 'a')
    strictEqual(functor(undefined)(), undefined)
    strictEqual(functor(null)(), null)
    strictEqual(functor(1)(), 1)
    strictEqual(isNaN(functor(NaN)()), true)
  })

  function noop() {}

})
