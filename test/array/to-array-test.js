define(['array/to-array'], function(toArray) {
  describe('to-array', function() {
    it('should return the same value that was passed as the first argument', function() {
      var obj = {}
      expect(toArray(10)).to.be.deep.equal([])
      expect(toArray({0: 0, 2: 2, length: 3})).to.be.deep.equal([0, , 2])
      expect(toArray({0: 0, 1: 1, length: 'something'})).to.have.members([0, 1, 'something'])
    })
  })
})
