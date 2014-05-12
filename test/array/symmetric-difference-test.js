define(['array/symmetric-difference'], function(symmetricDifference) {
  describe('symmetric-difference', function() {
    it('should collect the items that are not common in the arrays', function() {
      expect(symmetricDifference([0, 1, 2], [1, 2, 3])).to.be.deep.equal([0, 3])
      expect(symmetricDifference([1, 2, 3], [0, 1, 2])).to.be.deep.equal([3, 0])
      expect(symmetricDifference([3], [0])).to.be.deep.equal([3, 0])
      expect(symmetricDifference([1, 2, 3], [3, 2, 1])).to.be.deep.equal([])
      expect(symmetricDifference([null], [undefined])).to.be.deep.equal([null, undefined])
      expect(symmetricDifference([NaN], [NaN])).to.be.deep.equal([])
      expect(symmetricDifference([1, NaN, NaN], [NaN])).to.be.deep.equal([1])
    })
  })
})
