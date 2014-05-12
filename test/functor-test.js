define(['functor'], function(functor) {
  describe('functor', function() {
    it('should return a function when a function is passed', function() {
      expect(functor(noop)).to.be.a.function
      expect(functor(functor)).to.be.equal(functor)
    })
    it('should return the same value when called with a non function', function() {
      var a = {}
      expect(functor(null)).to.be.a.function
      expect(functor(null)()).to.be.null
      expect(functor(undefined)()).to.be.undefined
      expect(functor(1)()).to.be.equal(1)
      expect(functor(a)()).to.be.equal(a)
      expect(functor('a')()).to.be.equal('a')
      expect(functor(NaN)()).to.be.NaN
    })

    function noop(){}
  })
})
