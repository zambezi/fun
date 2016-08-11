define(['trampoline'], function(trampoline) {
  describe('trampoline', function() {

    function factory(accValue) {
      var acc = accValue

      var spy = sinon.spy(f)

      function f(v) {
        if (v > 0) return function () {
          acc += v
          return spy(v - 1)
        }
        return acc
      }
      return spy
    }

    it('should call a function recursively if it return a function', function() {
      var f = factory(0)
      expect(trampoline(f, 10)).to.equal(55)
      expect(f.callCount).to.equal(11)
    })

    it('should return the value when passed a non-function', function() {
      var f = null
      expect(trampoline.bind(null, f, 10)()).to.be.null
    })

  })
})
