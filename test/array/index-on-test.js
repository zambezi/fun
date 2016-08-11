define(['array/index-on'], function(indexOn) {
  describe('index-on', function() {
    it('should return the index of the element matched by the predicate', function() {
      var things = [3, 2, 1]
          , search = indexOn(things)
      function equals(a) {
        return function(b) {
          return a === b
        }
      }
      expect(search(equals(3))).to.be.equal(0)
      expect(search(equals(1))).to.be.equal(2)
      expect(search(equals(0))).to.be.equal(-1)
    })
  })
})
