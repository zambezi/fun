define(['compare-on', 'ascending'], function(compareOn, ascending) {
  describe('compare-on', function() {
    it('should compare values on different criteria', function() {
      var propComparator = compareOn(prop(0), prop(1))
      expect(propComparator([0, 1], [0, 1])).to.be.equal(0)
      expect(propComparator([0, 2], [0, 1])).to.be.equal(1)
      expect(propComparator([0, 2], [0, 3])).to.be.equal(-1)
      expect(propComparator([1, 2], [0, 3])).to.be.equal(1)
      function prop(key) {
        return function(a, b) {
          return ascending(a[key], b[key])
        }
      }
    })
  })
})
