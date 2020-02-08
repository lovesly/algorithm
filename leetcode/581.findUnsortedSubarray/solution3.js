/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
var findUnsortedSubarray = function(nums) {
  if (!nums || nums.length < 2) return 0;
  const clone = nums.slice();
  // const clone = [].concat(nums);
  // const clone = [...nums];
  // 需要写明排序方式，各个引擎默认实现不同
  nums.sort((a, b) => a - b);
  let s, e;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== clone[i]) {
          s = i;
          break;
      }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] !== clone[i]) {
          e = i;
          break;
      }
  }
  return e !== undefined ? e - s + 1 : 0;
};