define(['tap'], function(tap) {
  describe('tap', function() {

    var spyDebug
      , spyGroup
      , spyGroupEnd

    beforeEach(function() {
      spyDebug = sinon.spy(console, "debug")
      spyGroup = sinon.spy(console, "group")
      spyGroupEnd = sinon.spy(console, "groupEnd")
    })

    function tapped() {
      return 'returnValue'
    }

    it('should output two lines of console.debug', function() {
      tap(tapped, 'tappedId')()
      expect(spyDebug.calledTwice).to.be.true
      expect(spyGroup.calledOnce).to.be.true
      expect(spyGroupEnd.calledOnce).to.be.true
    })

    it('should match the expected arguments', function() {
      tap(tapped, 'tappedId')()
      expect(spyGroup.withArgs('tappedId').called).to.be.true
      expect(spyGroupEnd.withArgs('tappedId').called).to.be.true
      expect(spyDebug.args[0]).to.be.deep.equal(['func', 'tapped', 'called on', '--window--', '--no args--'])
      expect(spyDebug.withArgs('and returned', 'returnValue').called).to.be.true
    })

    it('should match the expected arguments and context', function() {
      var obj = {hey: 'hey'}
      tap(tapped, 'tappedId').bind(obj)('first')
      expect(spyDebug.args[0]).to.be.deep.equal(['func', 'tapped', 'called on', obj, 'with', 'first'])
    })

    afterEach(function() {
      console.debug.restore()
      console.group.restore()
      console.groupEnd.restore()
    })

  })
})
