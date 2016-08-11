define([], function() {

  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1

  return function isArrayLike(collection) {
    var length = collection ? collection.length : ''
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
  }

})