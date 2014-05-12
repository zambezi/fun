define(['string/slugify'], function(slugify) {
  describe('slugify', function() {
    it('should slugify a string', function() {
      expect(slugify('a|a')).to.be.equal('a-a')
      expect(slugify('a')).to.be.equal('a')
      expect(slugify('a~~and')).to.be.equal('a-and')
      expect(slugify(':-)')).to.be.equal('-')
      expect(slugify(':/')).to.be.equal('-')
      expect(slugify(-1)).to.be.equal('-1')
    })
  })
})
