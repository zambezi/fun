define(['string/lower'], function(lower) {
  describe('lower', function() {
    it('should lowercase a string', function() {
      expect(lower('A')).to.be.equal('a')
      expect(lower('BABA')).to.be.equal('baba')
      expect(lower(1)).to.be.equal('1')
      expect(lower(new String('World'))).to.be.equal('world')
    })
  })
})
