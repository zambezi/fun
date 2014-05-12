define(['array/reverse'], function(reverse) {
  describe('reverse', function() {
    it('should reverse array like entities', function() {

      expect(reverse(arguments)).to.deep.equal([])
      expect(reverse([1, 2, , 4])).to.deep.equal([4, , 2, 1])
      expect(reverse({0: 0, 2: 2, length: 3})).to.deep.equal([2, , 0])
      expect(reverse({0: 0, 1: 1, length: 'something'})).to.deep.equal(['something', 1, 0])

    })
  })
})
