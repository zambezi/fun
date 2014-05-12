define(['object/wrap', 'object/unwrap'], function(wrap, unwrap) {
  describe('wrap', function() {
    it('should wrap an object and shadow its original properties if overwritten', function() {
      var thing = {a: 0, b: 1}
        , wrapped = wrap(thing)
      wrapped.a = 2
      expect(unwrap(wrapped)).to.be.equal(thing)
    })
  })
})
