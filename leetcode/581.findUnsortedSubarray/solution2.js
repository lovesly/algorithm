/**
 * @param {number[]} nums
 * @return {number}
 */
// 另一种暴力法，减少边界case检测
// 注意，是如何将两个 for 合并，并且覆盖了边界case
var findUnsortedSubarray = function(nums) {
  if (!nums || nums.length < 2) return 0;
  let s = nums.length - 1, e = 0;
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] < nums[i]) {
              s = Math.min(s, i);
              e = Math.max(e, j);
          }
      }
  }
  return e >= s ? e - s + 1 : 0;
};