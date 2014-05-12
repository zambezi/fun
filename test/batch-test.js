define(['batch'], function(batch) {
  describe('batch', function() {
    it('should run all the functions', function() {
      function counter() {
        var count = 0
        return function() {
          return ++count
        }
      }
      var c = counter()
      expect(batch(c, c, c)()).to.be.equal(3)
    })
    it('should throw if some parameters are not functions', function() {
      expect(batch(batch, null)).to.throw(Error)
    })
  })
})
