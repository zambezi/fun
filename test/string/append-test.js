define(['string/append'], function(append) {
  describe('append', function() {
    it('should concatenate two strings', function() {
      expect(append('b', 'a')).to.be.equal('ab')
    })
    it('should concatenate two numbers', function() {
      expect(append(1, 2)).to.be.equal('21')
    })
  })
})
