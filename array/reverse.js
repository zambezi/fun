define(
  ['./to-array']
, function(toArray) {
    return function reverse(a) {
      return toArray(a).reverse()
    }
  }
)
