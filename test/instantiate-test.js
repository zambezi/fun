define(['instantiate'], function(instantiate) {
  describe('instantiate', function() {
    it('should create objects from constructors functionally', function() {
      expect(instantiate(Foo)).to.be.instanceOf(Foo)
      expect(instantiate(Foo, 1).prop).to.be.equal(1)
      expect(Foo()).to.be.undefined

      function Foo(prop) {
        this.prop = prop
      }

    })
  })
})
