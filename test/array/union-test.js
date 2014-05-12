define(['array/union'], function(union) {
  describe('union', function() {
    it('should compute the union of two array-like entities', function() {

      expect(union([1, 2, 3], [101, 2, 1, 10], [2, 1])).to.deep.equal([1, 2, 3, 101, 10])
      expect(union([1, 2, 3], [3, 4, 5], [5, [1, 2]])).to.deep.equal([1, 2, 3, 4, 5, [1, 2]])
      expect(union([1, 2, , 3], [3, 4, 5], [5])).to.deep.equal([1, 2, undefined, 3, 4, 5])
      expect(union(1, 2)).to.deep.equal([])
      expect(union([NaN], [NaN])).to.deep.equal([])

    })




  })
})
