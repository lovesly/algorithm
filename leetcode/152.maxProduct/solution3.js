/**
 * 引以为戒，这是丑陋的代码，逻辑难以一眼看清楚。各种 if else
 * 说明此算法还是有些问题，记录的正，负，0，undefined 四种情况，以及数组的 正，负，0 三种情况，从这个角度
 * 切入是不好的，需要区分大量的情况。
 */
var maxProduct = function(nums) {
  let res = -Infinity, max, min;
  // 遍历一遍，记录左侧已遍历过的最大正负值
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = min = 0;
    } else if (nums[i] > 0) {
      if (max) max = Math.max(nums[i], nums[i] * max);
      else max = nums[i];
      if (min) min = nums[i] * min;
    } else {
      // nums[i] < 0, 负负得正妈的
      const tmp = min;
      // max, min 都可能为0
      if (max && min) {
        min = max * nums[i];
        max = tmp * nums[i];
      } else if (max) {
        min = nums[i] * max;
        max = undefined;
      } else if (min) {
        max = nums[i] * min;
        min = nums[i];
      } else {
        // max，min 均为 0 或者 undefined
        min = nums[i];
        max = undefined;
      }
    }
    if (min !== undefined) res = Math.max(res, min);
    if (max !== undefined) res = Math.max(res, max);
  }
  return res;
};