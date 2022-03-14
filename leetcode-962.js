// 算法: 单调栈
var maxWidthRamp = function (nums) {
  var stack = [0]
  // var stack2 = [nums[0]]
  var max = 0
  for (let i = 1; i < nums.length; i++) {

    if (nums[i] < nums[stack[stack.length - 1]]) {
      stack.push(i)
      // stack2.push(nums[i])
    }
  }
  for (let j = nums.length - 1; j > 0; j--) {
    // console.log('stack', stack, stack2)
    // console.log('j,nums[j]', j, nums[j], '>', nums[stack[stack.length - 1]])
    /**
     * 因为stack 是按值的递减顺序进行填充的下标数组，设置ramp为0
     * 1. j 固定，得出nums[j],
     * 2. 依次使用stack中栈顶的下标i，得出 nums[i]
     * 3. 然后判断 nums[j] > nums[i]，
     * 3.1. 如果大于等于，则计算出坡度newRamp，然后ramp为(ramp,newRamp)的最大值，然后推出stack栈顶，产生新的栈顶，继续第2步
     * 3.2. 如果小于，则从栈顶到栈底的所有数字都不符合，因为栈是递减的
     *      直接推出while, 然后继续循环， 然后 j--, 跳到第一步
     * 4.  等所有j循环完后，直接返回ramp值
     */
    while (stack.length > 0 && nums[j] >= nums[stack[stack.length - 1]]) {
      // console.log('ramp', j, '-', stack[stack.length - 1], '=', j - stack[stack.length - 1])
      max = Math.max(j - stack.pop(), max)
      // console.log('max', max)
      // stack2.pop()
      // console.log('stack', stack, stack2, nums[j])
    }
    // console.log('-------------')
  }
  return max
};

var res1 = maxWidthRamp([6, 1, 8, 2, 0, 5])
console.log('res1', res1)
var res2 = maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1])
console.log('res2', res2)