define(['sum'], function(sum) {
  describe('sum', function() {
    it('should return 10 for the sum on 1, 2, 3, 4', function() {
      expect(sum(1, 2, 3, 4)).to.be.equal(10)
    })
    it('should return 15 for the sum on 1, 2, 3, 4, 5', function() {
      expect(sum(1, 2, 3, 4, 5)).to.be.equal(15)
    })
    it('should return 0 for the sum on no arguments', function() {
      expect(sum()).to.be.equal(0)
    })
    it('should return 0ab for the sum on no arguments', function() {
      expect(sum('a', 'b')).to.be.equal('0ab')
    })
  })
})
