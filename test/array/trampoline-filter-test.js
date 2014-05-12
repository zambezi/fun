define(['array/trampoline-filter', 'trampoline'], function(trampolineFilter, trampoline) {
  describe('trampoline-filter', function() {

    function factory(value) {
      var spy = sinon.spy(f)

      function f(v) {
        return value
      }
      return spy
    }

    it('should keep all values', function() {
      var f = factory(true)
      expect(trampoline(trampolineFilter([1, 2, 3], f))).to.be.deep.equal([1, 2, 3])
      expect(f.callCount).to.be.equal(3)
    })
    it('should filter out all values', function() {
      var f = factory(false)
      expect(trampoline(trampolineFilter([1, 2, 3], f))).to.be.deep.equal([])
      expect(f.callCount).to.be.equal(3)
    })
    it('should keep odd values', function() {
      var spy = sinon.spy(f)
      expect(trampoline(trampolineFilter([1, 2, 3], spy))).to.be.deep.equal([1, 3])
      expect(spy.callCount).to.be.equal(3)

      function f(v) {
        return v % 2
      }
    })

  })
})
