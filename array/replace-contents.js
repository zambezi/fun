define(
  []
, function() {
    return function replaceContents(a, b) {
      a.splice.apply(a, [0, a.length].concat(b))
    }
  }
)
