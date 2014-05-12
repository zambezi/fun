define(
  function () {
    var escapeForRegExp = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
    return function escapeRegex(str) {
      return str.replace(escapeForRegExp, "\\$&")
    }
  }
)
