define(['greater-than'], function(greaterThan) {
  describe('greater-than', function() {
    it('should compare values', function() {
      expect(greaterThan(1, 2)).to.be.false
      expect(greaterThan(2, 1)).to.be.true
      expect(greaterThan(2, 2)).to.be.false
      expect(greaterThan(NaN, NaN)).to.be.false
      expect(greaterThan(NaN, Infinity)).to.be.false
      expect(greaterThan(Infinity, 0)).to.be.true
      expect(greaterThan(0, "Infinity")).to.be.false
    })
  })
})
