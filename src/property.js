export function property (k) {
  if (!k) return d => d
  const components = k.split('.')
  return function prop (d) {
    return components.reduce(value, d)
    function value (obj, k) {
      if ((obj === void 0) || (obj === null)) return
      return obj[k]
    }
  }
}
