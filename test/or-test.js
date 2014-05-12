define(['or'], function(or) {
  describe('or', function() {
    it('should return true if 14 is divisible by 2 or 7', function() {
      expect(or(divisibleBy2, divisibleBy7)(14)).to.be.true
    })

    it('should return true if 2 is divisible by 2 or 7', function() {
      expect(or(divisibleBy2, divisibleBy7)(2)).to.be.true
    })

    it('should return false if 5 is divisible by 2 or 7', function() {
      expect(or(divisibleBy2, divisibleBy7)(5)).to.be.false
    })

    function divisibleBy2(d) {
      return d % 2 == 0
    }

    function divisibleBy7(d) {
      return d % 7 == 0
    }

  })
})
