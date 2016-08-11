define(['transpose-arguments'], function(transposeArguments) {
  describe('transpose-arguments', function() {
    it('Execute a function with arguments passed in a given order', function() {
      var ta = transposeArguments(2,0,1)
        , taSmall = transposeArguments(2)

      function f() {
        return Array.prototype.slice.call(arguments)
      }

      expect(ta(f, 'one', 'two', 'three')).to.deep.equal(['three', 'one', 'two'])
      expect(ta(f, 'one')).to.deep.equal([undefined, 'one', undefined])
      expect(taSmall(f, 'one', 'two', 'three')).to.deep.equal(['three'])
      expect(taSmall(f, 'one')).to.deep.equal([undefined])
      expect(taSmall(f, undefined, NaN, null)).to.deep.equal([null])
      expect(taSmall).to.throw(Error)
    })
  })
})
