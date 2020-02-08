// 结合了 4 与 3 的想法，个人认为这个是最优的。靠
var maxProduct = function(nums) {
  let res = -Infinity, max = 1, min = 1;
  for (let i = 0; i < nums.length; i++) {
    // 为 0 呢？
    if (nums[i] < 0) {
      // 交换 max, min
      [max, min] = [min, max];
    } 
    // 这里很巧妙，覆盖了 3 的所有case，他吗的
    max = Math.max(nums[i] * max, nums[i]);
    min = Math.min(nums[i] * min, nums[i]);
    res = Math.max(res, max);
  }
  return res;
};