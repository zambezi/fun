define(
  [ '../identity', '../property', '../partial' ]
, function(identity, property, partial) {

    return partial(flatten, partial._, partial._, [], identity)

    function flatten(list, children, acc, cont)  {
      var chi = children || property('children')
        , length = list.length

      if (length == 0) return cont(acc)
      return partial(step, list.shift())

      function step(it) {
        var items = chi(it) || []
          , next = list.shift()

        acc.push(it) 

        return partial(
          flatten
        , items
        , chi
        , acc 
        , next ? partial(step, next) : cont
        )
      }
    }
  }
)
