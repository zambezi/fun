# `fun/array/is-array-like`

Returns `true` if the given input is an array-like object; `false` otherwise.

## Syntax

```javascript
result = isArrayLike(obj)
```

### Parameters

- `obj` An object to check for array likeness.

## Examples

```javascript
isArrayLike([1, 2, 3])                   // true
isArrayLike({0: 1, length: 1})           // true
isArrayLike({0: 1, length: 'something'}) // false
```

```javascript
function foo() {
  return isArrayLike(arguments)
}

foo() // true
```