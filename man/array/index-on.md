# `fun/array/index-on`

Given an array, `fun/array/index-on` will return a new function, which when given a predicate function will return the index of the first item in the array to match the predicate.

## Syntax

```javascript
index = indexOn(arr)(predicate)
```

### Parameters

- `arr` The array to search through.
- `predicate` A predicate function to shortcut the search once an item has been found. The function should take one parameter:
  - `item` The iterated item. The predicate function should return `true` if `item` matches the predicate.

## Examples

```javascript
var a = [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ]
var q = indexOn(a)

q(function(x) { return x === 1 }) // 5
```
