# `fun/array/union`

Returns the [union][1] of the given sets; that is, a set consisting of all distinct elements in the input sets.

[1]: https://en.wikipedia.org/wiki/Union_(set_theory)

## Syntax

```javascript
arr = union(... sets)
```

### Parameters

- `... sets` The sets used to produce the union.

## Examples

```javascript
union([1, 2, 3], [4, 2, 1, 5], [2, 1]) // [1, 2, 3, 4, 5]
```

Input sets are *not* flattened:

```javascript
union([1, 2, 3], [3, 4, 5], [5, [6, 7]]) // [1, 2, 3, 4, 5, [6, 7]]
```

Holes are preserved:

```javascript
union([1, 2, , 3], [3, 4, 5], [5]) // [ 1, 2, undefined, 3, 4, 5 ]
```

Input that can't be converted to an array will yield the empty set:

```javascript
union(1, 2) // []
union({})   // []
```