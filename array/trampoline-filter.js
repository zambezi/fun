define(
  [ '../functor', '../partial' ]
, function(functor, partial) {
    return function trampolineFilter(list, predicate) {
      var length = list.length
        , i = 0

      if (length == 0) return functor([])
      return partial(step, [], list[i], i)

      function step(acc, item, i) {
        if (i == length) return acc
        if (predicate(item, i, list)) acc.push(item)
        i++
        return partial(step, acc, list[i], i)
      }
    }
  }
)
