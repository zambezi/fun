define(function() {
  var toString = Object.prototype.toString

  return Array.isArray || function isArray(obj) {
    return toString.call(obj) === '[object Array]'
  }
})
