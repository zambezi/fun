define(function(require) {

  return function flattenBy(array, iteratee) {
    return array.reduce(flatten, [])
    function flatten(acc, item) {
      var children
      acc.push(item)
      children = iteratee(item)
      if (children) children.reduce(flatten, acc)
      return acc
    }
  }

})
