define(['./flatten'], function(flatten) {

  return function union () {
    return uniq(flatten(arguments, true, true))
  }

  function uniq(array) {
    var result = []

    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i]
      if (result.indexOf(value) === -1 && value === value ) result.push(value)
    }

    return result
  }

})

