# `fun/array/trampoline-filter`

Returns a trampoline compatible filter function, which can then be combined with `fun/trampoline`.

## Syntax

```javascript
fn = trampolineFilter(arr, predicate)
```

### Parameters

- `arr` An array to filter.
- `predicate` A predicate function used to filter elements.

## Examples

```javascript
var arr  = [1, 2, 3, 4, 5, 6]
var even = trampolineFilter(arr, function(d) { return d % 2 === 0 })

trampoline(even) // [2, 4, 6]
```