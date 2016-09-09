import functor from './functor'

export function or() {
  const funs = Array.from(arguments)

  return function or() {
    const args = arguments
        , context = this

    let result

    funs.some(call)

    return result

    function call(fun) {
      return (result = fun.apply(context, args))
    }
  }
}
