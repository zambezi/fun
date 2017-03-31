export function and () {
  const funs = Array.from(arguments)

  return function and () {
    const args = arguments
    const context = this

    let result

    funs.every(call)

    return result

    function call (fun) {
      return (result = fun.apply(context, args))
    }
  }
}
