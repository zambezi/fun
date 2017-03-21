import { someResult } from '../src'
import { strictEqual } from 'assert'

describe('some result', () => {
  it("should return the result of the first function that doesn't return undefined", () => {
    strictEqual(someResult(() => undefined, () => 3, () => 5)(), 3)
  })

  it('should pass the provided arguments to the called functions', () => {
    someResult(() => undefined, (a, b) => strictEqual(a, 3))(3, 4)
    someResult((a, b) => strictEqual(b, 4))(3, 4)
  })

  it('should call the provided functions with the original context', () => {
    const context = {}
    someResult(something).call(context)
    function something () {
      strictEqual(this, context)
    }
  })

  it('should accept "false" as not undefined', () => {
    strictEqual(someResult(() => undefined, () => false, () => 5)(), false)
  })
})
