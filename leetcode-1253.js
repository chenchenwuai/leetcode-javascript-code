var a1 = [1, 1, 0] // upper = 2  1+1
var a2 = [0, 0, 1] // lower = 1  1

var co = [1, 1, 1]


var reconstructMatrix = function (upper, lower, colsum) {
  const total = colsum.reduce((acc, cur) => acc + cur, 0)
  if (total != (upper + lower)) return []
  const res = Array.from({ length: 2 }, () => new Array(colsum.length).fill(0))

  for (let i = 0; i < colsum.length; i++) {
    const num = colsum[i]
    if (num == 2) {
      res[0][i] = 1
      res[1][i] = 1
      --upper
      --lower
    } else if (num === 0) {
      res[0][i] = 0
      res[1][i] = 0
    } else {
      if (upper >= lower && lower >= 0) {
        res[0][i] = 1
        --upper
      } else if (lower > upper && upper >= 0) {
        res[1][i] = 1
        --lower
      } else {
        return []
      }
    }
  }
  return res
};

var res1 = reconstructMatrix(2, 1, [1, 1, 1])
console.log('res1', res1)
var res2 = reconstructMatrix(2, 3, [2, 2, 1, 1])
console.log('res2', res2)
var res3 = reconstructMatrix(5, 5, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1])
console.log('res3', res3)
var res4 = reconstructMatrix(9, 2, [0, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2])
console.log('res4', res4)
var res5 = reconstructMatrix(4, 7, [2, 1, 2, 2, 1, 1, 1])
console.log('res5', res5)