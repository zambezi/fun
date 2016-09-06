## replace array contents

Replace the contents of an array without creating a new one.
This is sometimes needed when a client relies on array references and mutation.

```javascript
const a = [ 1, 2, 3 ]
replaceArrayContents(a, [ 2, 3, 4 ])

a // [ 2, 3, 4 ]
```
