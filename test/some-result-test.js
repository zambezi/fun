define(['some-result'], function(someResult) {
  describe('someResult', function() {
    it('should run all the functions', function() {
      function counter(count, value) {
        return function() {
          count -= 1
          if (!count) return value
        }
      }
      var c3 = counter(3, 'finished')
        , c2 = counter(2, 'finished')
      expect(someResult(c3, c3, c3, c3, c3)()).to.be.equal('finished')
      expect(someResult(c2)()).to.be.undefined
    })
    it('should throw if some parameters are not functions', function() {
      expect(someResult(null, null)).to.throw(Error)
    })
  })
})
