define(['negate'], function(negate) {

  describe('negate', function() {
    it('should return false if the predicate returns true', function() {
      expect(negate(returnsTrue)()).to.be.false
    })

    it('should return true if the predicate returns false', function() {
      expect(negate(negate(returnsTrue))()).to.be.true
    })

    it('should return false if the predicate returns truey', function() {
      expect(negate(returnsTruey)()).to.be.false
    })

    it('should return true if the predicate returns falsey', function() {
      expect(negate(returnsFalsy)()).to.be.true
    })

    function returnsTrue() {
      return true
    }
    function returnsTruey() {
      return 1
    }
    function returnsFalsy() {
      return 0
    }
  })
})
