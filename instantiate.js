define(
  []
, function() {
    return function instantiate(Cls) {
      return new (Function.prototype.bind.apply(Cls, arguments));
    }
  }
)
