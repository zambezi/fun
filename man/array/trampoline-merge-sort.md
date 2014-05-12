# `fun/array/trampoline-merge-sort`

Returns a trampoline compatible merge-sort function, which can then be combined with `fun/trampoline`.

## Syntax

```javascript
fn = trampolineMergeSort(arr, [sort = ascending])
```

### Parameters

- `arr` The array to sort.
- `sort` Optional. A function that defines the sort order. If omitted, the array is sorted in numerical ascending order.

## Examples

```javascript
trampoline(trampolineSort([3,5,2,8,9,2,4])) // [2, 2, 3, 4, 5, 8, 9]
```