define(['./is-array-like', './is-array'], function(isArrayLike, isArray) {
  return function flatten(input, shallow, strict, startIndex) {
    var output = [], idx = 0
    for (var i = startIndex || 0, length = input.length; i < length; i++) {
      var value = input[i]

      if (isArrayLike(value)) {

        if (!shallow) value = flatten(value, shallow, strict)

        var j = 0, len = value.length
        output.length += len
        while (j < len) {
          output[idx++] = value[j++]
        }
      } else if (!strict) {
        output[idx++] = value
      }
    }
    return output
  }
})