## batch

Group a list function into one which then you can call in one go.
All the provided functions will be called with the same arguments and on the same `this` context.
The result will be the result of the last function on the collection.

```javascript
const a = (d) => console.log('a' + d)
    , b = (d) => console.log('b' + d)
    , c = (d) => console.log('c' + d)
    , d = (d) => d.repeat(3)
    , batched = batch(a, b, c)

batched('OK') 

>> 'aOK'
>> 'bOK'
>> 'cOK'

// ⇒  'OKOKOK'
```
