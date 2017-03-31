export function trampolineMergeSort (a, comparator = ascending) {
  return continuedSort(a, d => d)
  function continuedSort (a, continuation) {
    const n = a.length

    let left
    let right
    let pivot

    if (n <= 1) return continuation(a)

    pivot = Math.floor(n / 2)
    left = a.slice(0, pivot)
    right = a.slice(pivot)

    return continuedSort.bind(
        null
      , left
      , function processLeft (leftR) {
        return continuedSort.bind(
            null
          , right
          , function processRight (rightR) {
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

  function fastMerge (a, b) {
    const result = []
    let aLength = a.length
    let bLength = b.length

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

function ascending (a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
}
