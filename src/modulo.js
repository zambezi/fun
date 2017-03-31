export function modulo (a, n) {
  return a - (n * Math.floor(a / n))
}
