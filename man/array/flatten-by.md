# `fun/array/flatten-by`

Recursively flattens an array of objects, finding their children using an iteratee function.

## Syntax

```javascript
flatArr = flattenBy(arr, iteratee)
```

### Parameters

- `arr` The array to be flattened.
- `iteratee` A function which will be given each iterated item, to then return any children the item may refer to. The function should take one argument:
  - `item` The iterated item from which to extract child items, if any.

## Examples

If you have an array of objects that have a `children` property:

```javascript
var a = [ { children: [ 1, 2, 3 ] }
        , { children: [ 4, 5, 6 ] }
        , { children: [ 7, 8, 9 ] }
        ]
```

... then you can flatten it with an expression like the following:

```javascript
flattenBy(a, function(x) { return x.children })
```

... which should then yield the following structure:

```javascript
[ { children: [ 1, 2, 3 ] }
, 1
, 2
, 3
, { children: [ 4, 5, 6 ] }
, 4
, 5
, 6
, { children: [ 7, 8, 9 ] }
, 7
, 8
, 9
]
```