export function trampolineFilter (list, predicate) {
  const length = list.length
  const i = 0

  if (length === 0) return () => []
  return () => step([], list[i], i)

  function step (acc, item, i) {
    if (i === length) return acc
    if (predicate(item, i, list)) acc.push(item)
    i++
    return () => step(acc, list[i], i)
  }
}
