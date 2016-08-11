define(['array/trampoline-flatten', 'trampoline'], function(trampolineFlatten, trampoline) {
  describe('trampoline-flatten', function() {

    it('should keep all values', function() {
      expect(trampoline(trampolineFlatten([1, 2, 3]))).to.be.deep.equal([1, 2, 3])
//      console.log(trampoline(trampolineFlatten([1, {children: [2]}, 3, 4])))
//      expect(trampoline(trampolineFlatten([1, {children: [2]}, 3, 4]))).to.be.deep.equal([1, {children: [2]}, 3, 4])
    })
  })
})
