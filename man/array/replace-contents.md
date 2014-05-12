# `fun/array/replace-contents`

Mutates an array to replace its entire contents in place. Once the contents of the array has been replaced, any reference held to the array will now point to the new contents.

**WARNING:** Because of the side-effects this function introduces, you should only consider using it if you really do need to replace the contents, as opposed to just referencing a new array.

## Syntax

```javascript
replaceContents(arr, content)
```

### Parameters

- `arr` The array to have its contents replaced.
- `content` An array which contents will replace that of `arr`.

## Examples

```javascript
var a = [1, 2, 3]
replaceContents(a, 1)         // a is now [1]
replaceContents(a, [3, 2, 1]) // a is now [3, 2, 1]
```
