## `fun/compare-against`

Builds a compare function that takes a reference list and will compare items regarding their order in that reference list.

Can be used to sort elements against a reference, using an iterator.

```
var items = [ { id: 'second' }, { id: 'third' }, { id: 'first' } ]
items.sort(compareAgainst([ 'first', 'second', 'third' ], _.property('id')))

```

