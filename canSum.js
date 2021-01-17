const canSum = (n, array, memo = {}) => {
  if (n in memo) return memo[n]
  if (n === 0) return true
  if (n < 0) return false
  for (let num of array) {
    const remainder = n - num
    if (canSum(remainder, array, memo) === true) {
      memo[n] = true
      return true
    }
  }
  memo[n] = false
  return false
}

console.log(canSum(300, [7, 14]))
