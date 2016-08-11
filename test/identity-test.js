define(['identity'], function(identity) {
  describe('identity', function() {
    it('should return the same value that was passed as the first argument', function() {
      var obj = {}
      expect(identity(10)).to.be.equal(10)
      expect(identity(1, 2)).to.be.equal(1)
      expect(identity(obj)).to.be.equal(obj)
    })
  })
})
