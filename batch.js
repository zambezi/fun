define(
  []
, function() {

    return function batch() {
      var funcs = arguments
        , length = funcs.length

      return function run() {
        var context = this
          , result 

        for (var i = 0; i < length; i++) {
          result = funcs[i].apply(context, arguments)
        }

        return result
      }
    }
  }
)
