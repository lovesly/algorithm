/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (!nums || !nums.length) return 0;
  const res = [];
  const left = [1];
  const right = Array(nums.length).fill(1);
  for (let i = nums.length - 2; i >= 0; i--) {
      right[i] = right[i+1] * nums[i+1];
  }
  res[0] = right[0];
  for (let i = 1; i < nums.length; i++) {
      left[i] = left[i-1] * nums[i-1];
      res[i] = left[i] * right[i];
  }
  return res;
};

// 线性复杂度，基本是两头双指针，或者正反遍历，额外数组来储存。