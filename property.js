define(
  [ './identity' ]
, function(identity) {
    return function property(k) {
      var components 
      if (!k) return identity
      components = k.split('.')
      return function prop(d) {
        return components.reduce(value, d)
        function value(obj, k) {
          if ((obj === void 0) || (obj === null)) return
          return obj[k]
        }
      }
    }
  }
)
