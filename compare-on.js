define(
  [ './array/to-array' ]
, function(toArray) {
    return function compareOn(/* funcs */) {
      var funcs = toArray(arguments) || []
        , l = funcs.length

      return function compare(a, b) {
        var result = NaN
          , i = 0

        while(!result && i < l) result = funcs[i++](a, b)
        return result
      }
    }
  }
)
