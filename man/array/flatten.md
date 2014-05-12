# `fun/array/flatten`

Flattens all elements of an array-like object, into a single contiguous array. This is a pure function.

## Syntax

```javascript
flatArr = flatten(arr, [shallow = false], [strict = false], [startIndex = false])
```
### Parameters

- `arr` The array-like object to be flattened.
- `shallow` Optional. If true, only flattens the immediate children of `arr`; otherwise flattens all descendants.
- `strict` Optional. If true, any non array-like element will be ignored; otherwise they are included in the output.
- `startIndex` Optional. The index of the first element of `arr` to include in the ouput. All subsequent elements will also be included.

## Examples

### Array-like input

```javascript
flatten([1, 2, 3, 4, 5])         // [1, 2, 3, 4, 5]
flatten({0: 1, 1: 2, length: 2}) // [1, 2]
```

```javascript
function foo(a, b, c) {
  return flatten(arguments)
}

foo(1, 2, 3) // [1, 2, 3]
```

### Recursive flattening

By default, `flatten` will recursively flatten any array-like elements in `arr`.

```javascript
flatten([1, 2, [3, 4, 5, [6, 7], [8]], 9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```javascript
var tree = { length: 3
           , 0: 1
           , 1: 2
           , 2: { length: 2
                , 0: 3
                , 1: 4
                } }

flatten(tree) // [1, 2, 3, 4]
```

### Shallow flattening

When `shallow` is `true`, only direct children of `arr` will be flattened, and any nested arral-like elements will be left intact.

```javascript
flatten([1, 2, [3, 4, 5, [6, 7]], 8], true) // [1, 2, 3, 4, 5, [6, 7], 8]
```

### Strict flattening

When `strict` is true, only the children of array-like elements will be included in the output.

```javascript
flatten([1, 2, [3, 4, 5, [6, 7]], 8], true, true) // [3, 4, 5, [6, 7]]
```

When `strict` is true, `shallow` must also be set to true, since otherwise it will exclude everything and just return an empty array.

```javascript
flatten([1, 2, [3, 4, 5, [6, 7]], 8], false, true) // []
```

### Missing values

Missing values will be set to `undefined`:

```javascript
flatten([1, 2, , 4])             // [1, 2, undefined, 4]
flatten({length: 3, 0: 1, 2: 2}) // [1, undefined, 2]
```

This also works recursively:

```javascript
flatten([1, 2, 3, [, 4, 5], 6]) // [ 1, 2, 3, undefined, 4, 5, 6 ]
```

```javascript
var tree = { length: 4
           , 0: 1
           , 1: 2
           , 2: { length: 3
                , 0: 3
                , 1: 4
                } }

flatten(tree) // [1, 2, 3, 4, undefined, undefined]
```

### Non array-like input

If `arr` is not an array-like object, an empty array is returned.

```javascript
flatten({})                          // []
flatten(123)                         // []
flatten({0: 1, length: 'something'}) // []
```