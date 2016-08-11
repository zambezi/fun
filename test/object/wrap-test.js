define(['object/wrap'], function(wrap) {
  describe('wrap', function() {
    it('should wrap an object and shadow its original properties if overwritten', function() {
      var thing = {a: 0, b: 1}
        , wrapped = wrap(thing)
      wrapped.a = 2
      expect(wrapped.a).to.be.equal(2)
      expect(Object.getPrototypeOf(wrapped).a).to.be.equal(0)
      expect(wrapped.b).to.be.equal(1)
      expect(thing.a).to.be.equal(0)
    })
  })
})
