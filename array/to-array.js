define(['./is-array', '../identity', './is-array-like'], function(isArray, identity, isArrayLike) {

  return function toArray(obj) {
    if (!obj) return []
    if (isArray(obj)) return obj.slice()
    if (isArrayLike(obj)) return Array.prototype.map.call(obj, identity)
    if ('object' === typeof obj) return Object.keys(obj).map(function(key) { return obj[key] })
    return []
  }
})
