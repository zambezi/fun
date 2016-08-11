define(
  ['./array/to-array']
, function(toArray) {
    return function sum(/* arguments */) {
      return toArray(arguments).reduce(add, 0)
    }

    function add(a, b) {
      return a + b
    }
  }
)
