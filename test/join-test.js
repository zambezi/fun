define(['join'], function(join) {
  describe('join', function() {
    it('should join the first argument with the second', function() {
      expect(join([1, 2], ',')).to.be.equal('1,2')
    })
  })
})
