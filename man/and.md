## and

Build a function that will result the `and` evaluation of the provided predicates.
The arity of this function is dynamic, so you can pass any number of predicates to the function.


```javascript
and(divisibleBy2, divisibleBy7)(14) // ⇒  true
and(divisibleBy2, divisibleBy7)(2) // ⇒  false

function divisibleBy2(d) {
  return d % 2 == 0
}

function divisibleBy7(d) {
  return d % 7 == 0
}
```
