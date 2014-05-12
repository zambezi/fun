define(
  []
, function() {
    return function modulo(a, n) {
      return a - (n * Math.floor(a / n))
    }
  }
)
