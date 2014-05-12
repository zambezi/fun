# `fun/array/symmetric-difference`

Returns the [symmetric difference][1] of the given sets; that is, elements that included in either set, but not in their intersection. The sets may be anything that can be turned into an array with `fun/array/to-array`.

[1]: https://en.wikipedia.org/wiki/Symmetric_difference

## Syntax

```javascript
diff = symmetricDifference(a, b)
```

### Parameters
- `a`, `b` The sets used to determine the symmetric difference

## Examples

```javascript
symmetricDifference([0, 1, 2], [1, 2, 3]) // [0, 3]
symmetricDifference([1, 2, 3], [3, 4])    // [1, 2, 4]
```

