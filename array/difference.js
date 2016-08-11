define(['./to-array', './flatten'], function(toArray, flatten) {
  return function difference(array) {
    var rest = flatten(arguments, true, true, 1)
    return toArray(array).filter(function(value){
      return rest.indexOf(value) === -1
    })
  }
})
