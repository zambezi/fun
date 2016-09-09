## property

Create a function that will return the value of the provided `key` on the passed object.

```javascript
const accessor = property('a')

[ { a: 1 }, { a: 2 }, { a: 3 }  ].map(accessor) // ⇒ [ 1, 2, 3 ]

```

The provided `key` supports dot notation for nested properties.

```javascript
const accessor = property('a.b')

accessor( { a: { b: 2} } ) // ⇒ 2
```

... but will return `undefined` (instead of throwing up) if the property or the property chain is broken.

```javascript
property('a.b.c')({ a: { d: 3 } }) // ⇒ undefined
```
