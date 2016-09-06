## negate

Create a function that will return a Boolean negation of the result of the provided predicate.

```javascript
const isEven = (d) => d % 2 == 0
    , isOdd = negate(isEven)
```
