# `fun/array/reverse`

Composable version of [array reverse][1]. Unlike `Array.prototype.reverse` however, `fun/array/reverse` is a pure function and does *not* mutate the given array in place.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

## Syntax

```javascript
rev = reverse(arr)
```

### Parameters

- `arr` The array to be reversed. It will *not* be mutated.

## Examples

```javascript
var arr = [1, 2, 3]
var rev = reverse(arr) // [3, 2, 1]

rev === arr // false
```
