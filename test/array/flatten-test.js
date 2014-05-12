define(['array/flatten'], function(flatten) {
  describe('flatten', function() {
    it('should handle array-like entities', function() {

      expect(flatten(arguments)).to.deep.equal([])
      expect(flatten([1, 2, , 4])).to.deep.equal([1, 2, undefined , 4])
      expect(flatten({0: 0, 2: 2, length: 3})).to.deep.equal([0, undefined , 2])
      expect(flatten({0: 0, 1: 1, length: 'something'})).to.deep.equal([])

    })

    it('should flatten entities deeply', function() {

      expect(flatten([1, 2, [5, 6, 7, [8, 9]], 4])).to.deep.equal([1, 2, 5, 6, 7, 8, 9, 4])
      expect(flatten([1, 2, , [5, 6, 7] , 4])).to.deep.equal([1, 2, undefined , 5, 6, 7, 4])
      expect(flatten({0: 0, 2: 2, 3: {0: 4, 2: 5, length: 3}, length: 4})).to.deep.equal([0, undefined, 2, 4, undefined, 5])

    })

    it('should flatten entities shallowly', function() {

      expect(flatten([1, 2, [5, 6, 7, [8, 9]], 4], true)).to.deep.equal([1, 2, 5, 6, 7, [8, 9], 4])

    })

    it('should flatten entities strictly', function() {

      expect(flatten([1, 2, [5, 6, 7, [8, 9]], 4], true, true)).to.deep.equal([5, 6, 7, [8, 9]])

    })


    it('should flatten entities from a starting index', function() {

      expect(flatten([1, 2, [5, 6, 7, [8, 9]], 4], false, false, 2)).to.deep.equal([5, 6, 7, 8, 9, 4])

    })

    it('should flatten from arguments', function() {

      function f() {
        return flatten(arguments, true, true)
      }

      expect(flatten({
        0: [1, 2, 3],
        1: [4, 5, 6],
        2: [7, 8],
        length: 3
      })).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])


      expect(f([1, 2], [3, 4], [5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6])

    })
  })
})
