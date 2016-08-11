define(
  [ './array/to-array' ]
, function(toArray) {
    return function trampoline(fun /*, args */) {
      var result = isFunction(fun) ? fun.apply(fun, toArray(arguments).slice(1)) : fun
      while (isFunction(result)) result = result()
      return result
    }

    function isFunction(value) {
      return typeof value === 'function'
    }
  }
)
