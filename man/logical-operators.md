## `fun/and`, `fun/or`  and `fun/negate`

Logical operators.
These take as arguments functions and will return a function that when called, will in turn call each of the passed functions until it can determine its return value.

If you pass in a non-function value, that will automatically be turned into a function that returns that value.

```javscript

var check = and(divisibleBy2, divisibleBy7)

function divisibleBy2(d) {
  return d % 2 == 0
}

function divisibleBy7(d) {
  return d % 7 == 0
}

check(14) // true
check(2)  // false

d3.range(100).filter(check) // [0, 14, 28, 42, 56, 70, 84, 98]
```

Analogous to the native logical operators, the operation can short-circuit, preventing unnecessary operations.

See reference value table [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND_.28&&.29)

``` javascript
and("", whatever)(anything) // ""
or("", multiplyBy2)(4)      // 8

```


