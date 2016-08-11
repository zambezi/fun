define(
  []
, function() {
    return function functor(v) {
      return typeof v === "function" ? v : function() { return v }
    }
  }
)