## some result

For a provided set of functions, it will create a new function that will run them one by one until one of them returns something that is _not_ undefined.
It will return that first no undefined result and stop execution of the remaining functions.

This can be used to produce a result from several alternative functional options.

```javascript
const details = someResult(alternativeCondition1, alternativeCondition2, etc)(event)
```
