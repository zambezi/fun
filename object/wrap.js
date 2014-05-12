// Create a new proxy object on which we can set transient properties without
// touching the underlying data.  We can still access the original data
// properties through it.
define(
  [ '../partial', '../transpose-arguments' ]
, function(partial, transpose) {
    return partial(transpose(0), Object.create)
  }
)
