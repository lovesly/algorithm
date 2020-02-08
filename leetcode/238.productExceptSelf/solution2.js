/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (!nums || !nums.length) return 0;
  const res = [1];
  let accu = 1;
  for (let i = 1; i < nums.length; i++) {
      res[i] = res[i-1] * nums[i-1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
      res[i] *= accu;
      accu *= nums[i];
  }
  return res;
};
// 严格来说，这题不高明，只是复用了一下 res 数组，因为 res 数组不被视为额外空间
// 正向遍历一遍，存在 res 里，然后用一个变量来记录反向的累加值，反向遍历一遍。ojbk