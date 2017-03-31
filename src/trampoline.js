export function trampoline (fun) {
  let result = isFunction(fun) ? fun.apply(fun, Array.from(arguments).slice(1)) : fun
  while (isFunction(result)) result = result()
  return result
}

function isFunction (value) {
  return typeof value === 'function'
}
