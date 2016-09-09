export function batch() {
  const funcs = arguments
      , length = funcs.length

  return function run() {
    const context = this
    let result

    for (var i = 0; i < length;i++) {
      result = funcs[i].apply(context, arguments)
    }

    return result
  }
}
