define(['descending'], function(descending) {
  describe('descending', function() {
    it('should compare numbers', function() {
      expect(descending(0, 1)).to.be.equal(1)
      expect(descending(1, 0)).to.be.equal(-1)
      expect(descending(1, 1)).to.be.equal(0)
    })
    it('should compare strings', function() {
      expect(descending('a', 'b')).to.be.equal(1)
      expect(descending('z', 'y')).to.be.equal(-1)
      expect(descending('y', 'y')).to.be.equal(0)
    })
    it('should return NaN for uncomparable cases', function() {
      expect(descending(null, undefined)).to.be.NaN
      expect(descending(NaN, undefined)).to.be.NaN
      expect(descending(undefined, undefined)).to.be.NaN
      expect(descending(descending, descending)).to.be.NaN
    })
  })
})
