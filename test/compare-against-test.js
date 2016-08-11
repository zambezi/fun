define(['compare-against'], function(compareAgainst) {
  describe('compare-against', function() {
    it('should compare values in reverse order', function() {
      var identityComparator = compareAgainst([3, 2, 1], identity)
      expect(identityComparator(3, 1)).to.be.equal(-1)
      expect(identityComparator(3, 3)).to.be.equal(0)
      expect(identityComparator(2, 3)).to.be.equal(1)

      function identity(value) {
        return value
      }
    })
  })
})
