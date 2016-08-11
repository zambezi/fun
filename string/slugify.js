define([], function(_) {
    var nonWord = /\W+/g
    return function slugify(text) {
      return String(text || '').replace(nonWord, '-')
    }
  }
)
