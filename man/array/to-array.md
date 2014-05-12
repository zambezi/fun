# `fun/array/to-array`

Converts an objects to an array. If the object is an array, it will be copied (sliced.) If the object is array-like, order will be preserved. Otherwise, the properties of the object will be iterated and returned in the order they are returned. This is a pure function.

## Syntax

```javascript
arr = toArray(obj)
```

### Parameters

- `obj` An object to convert to an array.

## Examples

If given an array, it will be copied:

```javascript
var a = [1, 2, 3]
var b = toArray(a) // [1, 2, 3]
a === b            // false
```

If given an array-like object, order will be preserved:

```javascript
toArray({0: 1, 1: 2, length: 2}) // [1, 2]
```

Array-like objects with holes will have their holes preserved:

```javascript
toArray({0: 0, 2: 2, length: 3}) // [0, , 2]
```

Objects that can't be converted will yield an empty array:

```javascript
toArray({0: 0, 1: 1, length: 'something'}) // []
```