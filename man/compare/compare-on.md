## `fun/compare-on`

Build a compare function that threads a sequence of other compare functions.

The following example will sort the array `list` first by the `a` property of it's elements, then by the `b` property of its elements.

``` javascript

list.sort(
  compareOn(
    compareWith(d3.ascending, _.property('a'))
  , compareWith(d3.ascending, _.property('b'))
  )
)
```

