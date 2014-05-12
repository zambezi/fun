define(['string/prepend'], function(prepend) {
  describe('prepend', function() {
    it('should concatenate two strings', function() {
      expect(prepend('a', 'b')).to.be.equal('ab')
    })
    it('should concatenate two numbers', function() {
      expect(prepend(1, 2)).to.be.equal('12')
    })
  })
})
