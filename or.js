define(
  [
    './functor'
  , './array/to-array'
  ]
, function(functor, toArray) {

    return function or() {
      var funs = toArray(arguments).map(functor)

      return function innerOr() {
        var args = arguments
          , that = this
          , result

        funs.some(call)

        return result

        function call(f) {
          return (result = f.apply(that, args))
        }
      }
    }
  }
)
