define(['array/flatten-by'], function(flattenBy) {
  describe('flatten-by', function() {
    it('should flatten the tree by walking recursively', function() {
      var things = [
        {
          descendants: [
            {
              descendants: [{}]
            }
          , {}
          ]
        }
        , {}
      ]
      function iterator(item) {
        return item.descendants
      }
      expect(flattenBy(things, iterator)).to.be.deep.equal(
          [things[0]
          , things[0].descendants[0]
          , things[0].descendants[0].descendants[0]
          , things[0].descendants[1]
          , things[1]]
      )
    })
  })
})
