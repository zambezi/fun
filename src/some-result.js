export function someResult () {
  const funs = Array.from(arguments)

  return function someResult () {
    const args = arguments
    const context = this

    let result

    funs.some(run)

    return result

    function run (fun) {
      result = fun.apply(context, args)
      return !(result === undefined)
    }
  }
}
