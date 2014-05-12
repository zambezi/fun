define(['partial', 'array/to-array'], function(partial, toArray) {
  describe('partial', function() {
    var obj = {name: 'moe'}
    var func = function() { return this.name + ' ' + toArray(arguments).join(' ') }
    it('can partially apply', function() {
      obj.func = partial(func, 'a', 'b')
      expect(obj.func('c', 'd')).to.be.equal('moe a b c d')
    })

    it('can partially apply with placeholders', function() {
      obj.func = partial(func, partial._, 'b', partial._, 'd')
      expect(obj.func('a', 'c')).to.be.equal('moe a b c d')
    })

    it('accepts more arguments than the number of placeholders', function() {
      func = partial(function() { return arguments.length; }, partial._, 'b', partial._, 'd')
      expect(func('a', 'c', 'e')).to.be.equal(5)
    })

    it('accepts fewer arguments than the number of placeholders', function() {
      func = partial(function() { return arguments.length; }, partial._, 'b', partial._, 'd')
      expect(func('a')).to.be.equal(4)
    })

    it('unfilled placeholders are undefined', function() {
      func = partial(function() { return typeof arguments[2]; }, partial._, 'b', partial._, 'd')
      expect(func('a')).to.be.equal('undefined')
    })

    it('can partially bind a constructor', function() {
      // passes context
      function MyWidget(name, options) {
        this.name = name
        this.options = options
      }
      MyWidget.prototype.get = function() {
        return this.name
      }
      var MyWidgetWithCoolOpts = partial(MyWidget, partial._, {a: 1})
      var widget = new MyWidgetWithCoolOpts('foo')
      expect(widget instanceof MyWidget, '').to.be.true
      expect(widget.get()).to.be.equal('foo')
      expect(widget.options).to.deep.equal({a: 1})
    })

    it('allows the placeholder to be swapped out', function() {
      partial._ = obj;
      func = partial(function() { return arguments.length; }, obj, 'b', obj, 'd')
      expect(func('a')).to.be.equal(4)
    })

    it('swapping the placeholder preserves previously bound arguments', function() {
      partial._ = {};
      func = partial(function() { return arguments.length; }, obj, 'b', obj, 'd')
      expect(func('a')).to.be.equal(5)
      partial._ = partial;
    })
  })
})
