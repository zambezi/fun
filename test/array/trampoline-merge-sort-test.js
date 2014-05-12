define(['array/trampoline-merge-sort', 'trampoline', 'ascending'], function(trampolineMergeSort, trampoline, ascending) {
  describe('trampoline-filter', function() {
    it('should return an equal array if already sorted', function() {
      var compare = sinon.spy(ascending)
      expect(trampoline(trampolineMergeSort([1, 2, 3], compare))).to.be.deep.equal([1, 2, 3])
      expect(compare.called).to.be.true
    })
    it('should sort the array', function() {
      var compare = sinon.spy(ascending)
      expect(trampoline(trampolineMergeSort([3, 2, 1], compare))).to.be.deep.equal([1, 2, 3])
      var array = [3, 2, 1]
      expect(trampoline(trampolineMergeSort(array, compare))).to.be.deep.equal([1, 2, 3])
      expect(array).to.be.deep.equal([3, 2, 1])
      expect(compare.called).to.be.true
    })
    it('should return an empty array when sorting an empty array', function() {
      var compare = sinon.spy(ascending)
      expect(trampoline(trampolineMergeSort([], compare))).to.be.deep.equal([])
      expect(compare.called).to.be.false
    })

  })
})
