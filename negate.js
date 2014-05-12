define(
  []
, function() {
    return function negate(f) {
      return function not() {
        return !f.apply(this, arguments)
      }
    }
  }
)
