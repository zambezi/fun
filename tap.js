define(
  ['./array/to-array']
, function(toArray) {
    return function tap(f, id) {
      return function tap() {
        var result
          , name = id || f.name || ''

        console.group(name)
        console.debug.apply(
          console
        , [
            'func'
          , (f.name || '(anonymous)')
          , 'called on'
          , this == window ? '--window--' : this
          , arguments.length ?  'with' : '--no args--'
          ].concat(toArray(arguments))
        )
        result = f.apply(this, arguments)
        console.debug('and returned', result)
        console.groupEnd(name)
        return result
      }
    }
  }
)
