## compare with

Create a comparator function from another comparator and an accessor

```javascript
const second = (l) => l[1]
    , compareOnSecond = compareWith(ascending, second)

compareOnSecond([1, 1, 1, 1], [1, 1, 1, 1]) // ⇒  0
compareOnSecond([1, 1, 1, 1], [1, 2, 1, 1]) // ⇒  -1
compareOnSecond([1, 2, 1, 1], [1, 1, 1, 1]) // ⇒ 1
```

These comparator can then be used on standard `array.sort` operators.

