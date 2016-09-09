export function replaceArrayContents(a, b) {
  a.splice.apply(a, [0, a.length].concat(b))
  return a
}
