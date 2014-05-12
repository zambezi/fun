define(['modulo'], function(modulo) {
  describe('modulo', function() {
    it('should modulo two numbers always giving the result with the same sign as the divisor', function() {
      expect(modulo(-1, 100)).to.be.equal(99)
      expect(modulo(1, 100)).to.be.equal(1)
      expect(modulo(4, 3)).to.be.equal(1)
      expect(modulo(-4, -3)).to.be.equal(-1)
    })
  })
})
