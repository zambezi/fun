import { identity } from './identity'

export function property(k) {
  if (!k) return identity
  const components = k.split('.')
  return function prop(d) {
    return components.reduce(value, d)
    function value(obj, k) {
      if ((obj === void 0) || (obj === null)) return
      return obj[k]
    }
  }
}
