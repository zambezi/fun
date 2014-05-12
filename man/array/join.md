# `fun/join`

Composable version of [array join][1].

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

## Syntax

```javascript
str = join(arr, [separator = ','])
```
### Parameters

- `arr` [Array] The array to be joined.

- `separator` Optional. Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma. If separator is an empty string, all elements are joined without any characters in between them.

## Examples

Joining an array four different ways

The following example creates an array, a, with three elements, then joins the array four times: using the default separator, then a comma and a space, then a plus and an empty string.

```javascript
var a = ['Wind', 'Rain', 'Fire']
join(a)        // 'Wind,Rain,Fire'
join(a, ', ')  // 'Wind, Rain, Fire'
join(a, ' + ') // 'Wind + Rain + Fire'
join(a, '')    // 'WindRainFire'
```