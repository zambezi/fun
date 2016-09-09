## or

Build a function that will result the `or` evaluation of the provided predicates.
The arity is dynamic, so you can pass any number of predicates to the function.


```javascript
or(divisibleBy2, divisibleBy7)(14) // ⇒ true
or(divisibleBy2, divisibleBy7)(2) // ⇒ true
or(divisibleBy2, divisibleBy7)(5) // ⇒ false

function divisibleBy2(d) {
  return d % 2 == 0
}

function divisibleBy7(d) {
  return d % 7 == 0
}
```
