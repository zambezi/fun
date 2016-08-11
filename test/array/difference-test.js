define(['array/difference'], function(difference) {
  describe('difference', function() {

    it('should compute the difference of two array-like entities', function() {

      expect(difference([1, 2, 3, 4, 5], [5, 2, 10])).to.deep.equal([1, 3, 4])
      expect(difference([1, 2, 3, 4, 5], [5, 2, 10], [4])).to.deep.equal([1, 3])
      expect(difference([1, 2, 3], [3, 4, 5], [5, [1, 2]])).to.deep.equal([1, 2])
      expect(difference(1, 2)).to.deep.equal([])

    })

  })
})
