define(
  [
    './functor'
  , './array/to-array'
  ]
, function(functor, toArray) {

    return function and() {

      var funs = toArray(arguments).map(functor)

      return function innerAnd() {
        var args = arguments
          , that = this
          , result

        funs.every(call)

        return result

        function call(f) {
          return (result = f.apply(that, args))
        }
      }
    }
  }
)