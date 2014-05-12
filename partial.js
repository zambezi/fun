define(['./array/to-array'], function(toArray) {
  partial._ = partial

  return partial

  function partial(func) {
    var boundArgs = toArray(arguments).slice(1)
    return bound

    function bound() {
      var position = 0
        , length = boundArgs.length
      var args = Array(length)
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === partial._ ? arguments[position++] : boundArgs[i]
      }
      while (position < arguments.length) args.push(arguments[position++])
      return executeBound(func, bound, this, this, args)
    }
  }

  function baseCreate(prototype) {
    if (!isObject(prototype)) return {}
    return Object.create(prototype)
  }

  function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args)
    var self = baseCreate(sourceFunc.prototype)
    var result = sourceFunc.apply(self, args)
    if (isObject(result)) return result
    return self
  }

  function isObject(obj) {
    var type = typeof obj
    return type === 'function' || type === 'object' && !!obj
  }
})