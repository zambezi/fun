define(
  [ './ascending' ]
, function(ascending) {
    return function compareAgainst(reference, iterator) {
      return function compare(a, b) {
        return ascending(
          reference.indexOf(iterator(a))
        , reference.indexOf(iterator(b))
        )
      }
    }
  }
)
