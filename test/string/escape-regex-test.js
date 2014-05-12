define(['string/escape-regex'], function(escapeRegex) {
  describe('escape-regex', function() {
    it('should concatenate two strings', function() {
      expect(escapeRegex('http://{[.*+]}')).to.be.equal('http:\\/\\/\\{\\[\\.\\*\\+\\]\\}')
    })
  })
})
