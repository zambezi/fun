define(['string/upper'], function(upper) {
  describe('upper', function() {
    it('should uppercase a string', function() {
      expect(upper('a')).to.be.equal('A')
      expect(upper('baba')).to.be.equal('BABA')
      expect(upper(1)).to.be.equal('1')
      expect(upper(new String('World'))).to.be.equal('WORLD')
    })
  })
})
