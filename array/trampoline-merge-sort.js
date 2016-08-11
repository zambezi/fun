define(

  [ '../identity', '../partial', '../ascending' ]
, function(identity, partial, ascending) {

    return function trampolineMergeSort(a, sortFunction) {

      var comparator = sortFunction || ascending

      return continuedSort(a, identity)

      function continuedSort(a, continuation) {
        var n = a.length
          , left
          , right
          , pivot

        if (n <= 1) return continuation(a)

        pivot = Math.floor(n / 2)
        left = a.slice(0, pivot)
        right = a.slice(pivot)

        return partial(

          continuedSort
        , left
        , function processLeft(leftR) {
            return partial(
              continuedSort
            , right
            , function processRight(rightR) {
                return continuation(
                  fastMerge(
                    leftR
                  , rightR
                  )
                )
              }
            )
          }
        )
      }

      function fastMerge(a, b) {
        var result = []
          , aLength = a.length
          , bLength = b.length

        while (aLength || bLength) {
          if (!aLength) {

            result.push(b.pop())

          } else if (!bLength || (comparator(a[aLength - 1], b[bLength - 1]) > 0)) {

            result.push(a.pop())

          } else {

            result.push(b.pop())

          }

          aLength = a.length
          bLength = b.length
        }

        result.reverse()
        return result
      }
    }
  }
)
