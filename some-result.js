define(
  [ './array/to-array' ]
, function(toArray) {
    return function someResult(/* funs */) {
      var funs = toArray(arguments)
      return function result() {
        var res
          , that = this
          , args = arguments

        funs.some(apply)
        return res

        function apply(f) {
          res = f.apply(that, args) 
          return !(res === void 0)
        }
      }
    }
  }
)
