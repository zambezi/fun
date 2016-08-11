define(['array/is-array-like'], function(isArrayLike) {
  describe('is-array-like', function() {
    it('should recognize array like entities', function() {

      expect(isArrayLike(arguments)).to.be.true
      expect(isArrayLike([1, 2, , 4])).to.be.true
      expect(isArrayLike({0: 0, 2: 2, length: 3})).to.be.true
      expect(isArrayLike({0: 0, 1: 1, length: 'something'})).to.be.false

    })
  })
})
