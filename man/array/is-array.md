# `fun/array/is-array`

Returns `true` if the given input is an array; `false` otherwise. This test is strict, meaning it will return `false` for array-like objects.

## Syntax

```javascript
result = isArray(obj)
```

### Parameters

- `obj` The object to test

## Examples

```javascript
isArray([])            // true
isArray({ length: 0 }) // false
```