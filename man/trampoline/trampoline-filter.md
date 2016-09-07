## trampoline filter

An array filter that can be run in a trampoline.

```javascript
const a = [ 1, 2, 3, 4, 5, 6, 7 ]
trampoline(trampolineFilter, a, d => d % 0) // ⇒  [ 1, 3, 5, 7 ]
```

This can be used to split up long data set filtering onto different chunks.
