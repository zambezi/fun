# `fun/array/difference`

Returns the [difference][1] of the given sets; that is, elements that are included in the first set, but not in any subsequent sets. The sets may be anything that can be turned into an array with `fun/array/to-array`.

[1]: https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement

## Syntax

```javascript
diff = difference(... sets)
```

### Parameters

- '... sets' One or more sets to differentiate.

## Examples

```javascript
difference(1, 2)                              // []
difference([1, 2, 3, 4, 5], [5, 2, 10])       // [1, 3, 4])
difference([1, 2, 3, 4, 5], [5, 2, 10], [4])  // [1, 3]
difference([1, 2, 3], [3, 4, 5], [5, [1, 2]]) // [1, 2]
```