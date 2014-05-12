define(function(require) {
  return function indexOn(originalArray) {
    return function index(item) {
      return findIndex(originalArray, item)
    }
  }

  function findIndex(arrayLike, predicate) {
    for (var i = 0, length = arrayLike.length; i < length; i++) {
      if (i in arrayLike) {
        var value = arrayLike[i]
        if (predicate(value)) return i
      }
    }
    return -1
  }

})
