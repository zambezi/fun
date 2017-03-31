export function compareWith (comparator, iterator) {
  return function compare (a, b) {
    return comparator(iterator(a), iterator(b))
  }
}
