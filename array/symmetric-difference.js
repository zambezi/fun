define(
  [
    './union',
    './difference'
  ]
, function(union, difference) {
    return function(a, b) {
      return union(difference(a, b), difference(b, a))
    }
  }
)