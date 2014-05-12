define(
  [ './array/to-array' ]
, function(toArray) {
    return function transposeArguments() {
      var order = toArray(arguments)
      return function run(f) {
        var args = toArray(arguments).slice(1)
        return f.apply(this, order.map(toOriginalArgument)) 
        function toOriginalArgument(i) {
          return args[i]
        }
      }
    }
  }
)
