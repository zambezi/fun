## trampoline merge sort

A [merge sort](https://en.wikipedia.org/wiki/Merge_sort) implementation that splits its steps so that it can be run in a trampoline.

It takes an optional comparator function as a second argument.

```javascript
const a = [ 4, 2, 1, 0, 100 ]
trampoline(trampolineMergeSort, [ 4, 2, 1, 0, 100 ]) // ⇒ [ 0, 1, 2, 4, 100 ]
trampoline(trampolineMergeSort, [ 4, 2, 1, 0, 100 ], descending) // ⇒ [ 100, 4, 2, 1, 0 ]
```

Can be used to split up the work to sort very long data sets.
