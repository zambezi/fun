define(['array/replace-contents'], function(replaceContents) {
  describe('replace-contents', function() {
    it('should replace the content of the array with a single value', function() {
      var things = [3, 2, 1]
      replaceContents(things, 1)
      expect(things).to.be.deep.equal([1])
    })
    it('should replace the content of the array with the content of another array', function() {
      var things = [3, 2, 1]
      replaceContents(things, [0, 1])
      expect(things).to.be.deep.equal([0, 1])
      expect(things).to.be.not.deep.equal([3, 2, 1])
    })
    it('should not just reset the reference of the original array', function() {
      var things1 = [3, 2, 1]
          , things2 = [3, 2, 1]
      replaceContents(things1, things2)
      expect(things1).to.be.deep.equal(things2)
      expect(things1).to.be.not.equal(things2)
    })
  })
})
