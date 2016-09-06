## functor

Return the functional representation of some data.
For any argument that is not a function, it will return a function that when called will return the argument.

```javascript
const two = functor(2)
two() // ⇒ 2
```

If you pass it a function, it will return the same function.

```javascript
const square(d) => d * d
functor(square) === square // ⇒  true
```
