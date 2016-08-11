define(['multiply'], function(multiply) {
  describe('multiply', function() {
    it('should multiply numbers', function() {
      expect(multiply(1, 2)).to.be.equal(2)
      expect(multiply(2, 1)).to.be.equal(2)
      expect(multiply(2, NaN)).to.be.NaN
      expect(multiply(2)).to.be.NaN
    })
  })
})
