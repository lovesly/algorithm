/**
 * @param {number[]} nums
 * @return {number}
 */
// 好他妈的蠢啊，简单，5种方法。做成这个吊样子。。
// O(n^2)，两重循环, 暴力法，确定上下边界
var findUnsortedSubarray = function(nums) {
  if (!nums || nums.length < 2) return 0;
  // start, end pointers.
  let s = nums.length - 1, e = 0;
  for (let i = 1; i < nums.length; i++) {
      const cur = nums[i];
      // start
      for (let j = 0; j < i; j++) {
          if (cur < nums[j]) {
              s = Math.min(s, j);
          }
      }
      // end
      for (let j = i; j < nums.length; j++) {
          if (cur >= nums[j]) {
              e = Math.max(e, j);
          }
      }
  }
  return e >= s ? e - s + 1 : 0;
};