define(['property'], function(property) {
  describe('property', function() {
    it('should go down a path in a object', function() {
      var obj = {
        a: {
          b: {
            c: 1,
            d: 2
          },
          e: [4, 2],
          f: null,
          g: undefined
        }
      }
        , propABD = property('a.b.d')
        , propAE1 = property('a.e.1')
        , propAEZ = property('a.e.z')
        , propAF = property('a.f')
        , propAFZ = property('a.f.z')
        , propAGZ = property('a.g.z')
        , propNULL = property(null)
        , propFALSE = property(false)
        , propSTRING = property('string')

      expect(propABD(obj)).to.equal(2)
      expect(propAE1(obj)).to.equal(2)
      expect(propAEZ(obj)).to.be.undefined
      expect(propAF(obj)).to.be.null
      expect(propAFZ(obj)).to.be.undefined
      expect(propAGZ(obj)).to.be.undefined
      expect(propNULL()).to.be.undefined
      expect(propNULL(null)).to.be.null
      expect(propNULL(obj)).to.be.equal(obj)
      expect(propFALSE()).to.be.undefined
      expect(propSTRING()).to.be.undefined
    })
  })
})
