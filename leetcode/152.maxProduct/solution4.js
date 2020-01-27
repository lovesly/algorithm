// 标准最优解
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 和最大子序和类似，但是有个负数的问题。所以要考虑正负的问题，从最大最小的角度切入，可以避开具体分析正，负，零
 * 注意到只用到了 m[n-1] 并不需要整个数组，可以用变量，或长度为2的数组代替
 */
var maxProduct = function(nums) {
  const maxArr = [nums[0]];
  const minArr = [nums[0]];
  res = nums[0];
  for (let i = 1; i < nums.length; i++) {
      // 讲道理这里其实算了两边，其实算一遍分出大小就可以了
      maxArr[1] = Math.max(nums[i], nums[i] * maxArr[0], nums[i] * minArr[0]);
      minArr[1] = Math.min(nums[i], nums[i] * maxArr[0], nums[i] * minArr[0]);
      res = Math.max(res, maxArr[1], minArr[1]);
      maxArr.shift();
      minArr.shift();
  }
  return res;
};