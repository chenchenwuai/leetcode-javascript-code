/**
 * 一个负号可以传递到任意位置，于是任意两个不同位置的负号就可以相抵消了。 
    + 如果负数的个数为偶数，那么所有的负号都可以抵消。矩阵所有数都将非负。计算所有值的总和
    + 如果负数的个数为奇数，那个最多只剩下一个负号，我们把这个负号移动到绝对值最小
      的那个位置即可。最多有一个负数。最后总数减去这个负数绝对值的二倍（因为加了一次正数），就是结果。
 *
 */

var maxMatrixSum = function (matrix) {
  var res = 0;
  var odd = false;
  var min = Infinity;
  var n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let x = matrix[i][j]
      if (x < 0) {
        odd = !odd
        x = -x
      }
      res += x
      min = Math.min(x, min)
    }
  }
  return odd ? (res - 2 * min) : res
};

var res1 = maxMatrixSum([[1, -1], [-1, 1]])
console.log('res1', res1)
var res2 = maxMatrixSum([[1, 2, 3], [-1, -2, -3], [1, 2, 3]])
console.log('res2', res2)