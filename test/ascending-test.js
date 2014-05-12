define(['ascending'], function(ascending) {
  describe('ascending', function() {
    it('should compare numbers', function() {
      expect(ascending(0, 1)).to.be.equal(-1)
      expect(ascending(1, 0)).to.be.equal(1)
      expect(ascending(1, 1)).to.be.equal(0)
    })
    it('should compare strings', function() {
      expect(ascending('a', 'b')).to.be.equal(-1)
      expect(ascending('z', 'y')).to.be.equal(1)
      expect(ascending('y', 'y')).to.be.equal(0)
    })
    it('should return NaN for uncomparable cases', function() {
      expect(ascending(null, undefined)).to.be.NaN
      expect(ascending(NaN, undefined)).to.be.NaN
      expect(ascending(undefined, undefined)).to.be.NaN
      expect(ascending(ascending, ascending)).to.be.NaN
    })
  })
})
