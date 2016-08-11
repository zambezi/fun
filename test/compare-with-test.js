define(['compare-with', 'ascending'], function(compareWith, ascending) {
  describe('compare-with', function() {
    it('should compare values with different criteria', function() {
      var propComparator = compareWith(ascending, prop(1))
      expect(propComparator([0, 1], [0, 1])).to.be.equal(0)
      expect(propComparator([0, 2], [0, 1])).to.be.equal(1)
      expect(propComparator([0, 2], [0, 3])).to.be.equal(-1)
      expect(propComparator([1, 2], [0, 3])).to.be.equal(-1)
      function prop(key) {
        return function(value) {
          return value[key]
        }
      }
    })
  })
})
