## `fun/instantiate`

[composable][] class instantiation that does all the `new` nonsense for you.

```javascript

function Car(id) { this.id = id }
function Truck(id) { this.id = id }
var toys = [Car, Truck, Truck, Truck, Car].map(instantiate)
```

