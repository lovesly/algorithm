// 这个方法很巧妙。是分析问题本质，最大乘积是什么样的？偶数个负数，是全部的乘积
// 奇数个负数，则是以某个负数为界限
// 另外 0 会将 nums 分割为若干子数组。那么各个子数组的最大值，与 0 之间的最大的数为答案

// 还可以怎么优化呢？
var maxProduct = function(nums) {
  let max = 1;
  let res = nums[0];
  // 正反各遍历一遍，讲道理，有重复计算，所以不如上一个方法，但是思路很独特。
  for (let i = 0; i < nums.length; i++) {
    max *= nums[i];
    res = Math.max(res, max);
    // 遇到分割0，重置
    if (max === 0) max = 1;
  }
  max = 1;
  for (let i = nums.length-1; i >= 0; i--) {
    max *= nums[i];
    res = Math.max(res, max);
    // 遇到分割0，重置
    if (max === 0) max = 1;
  }
  return res;
};