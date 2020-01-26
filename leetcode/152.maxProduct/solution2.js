/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 和最大子序和类似，但是有个负数的问题。。所以没法判断终止，也就是说必须保留每一个乘积？
 * 其实变数就在负数上，不然只考虑0就可以了
 */
var maxProduct = function(nums) {
  let max;
  let mem = [];
  // 遍历一遍，记录左侧已遍历过的最大正负值
  // 细节有点问题
  for (let i = 0; i < nums.length; i++) {
      if (mem.length === 0) {
          // 第一次
          if (nums[i] > 0) {
              mem[0] = nums[i];
          } else if (nums[i] < 0) {
              mem[1] = nums[i];
          }
          max = max === undefined ? nums[i] : Math.max(max, nums[i]);
      } else {
          // 要考虑正负的问题
          if (nums[i] === 0) {
              mem.length = 0;
              max = Math.max(max, 0);
          } else if (nums[i] > 0) {
              if (mem[0]) {
                  mem[0] *= nums[i];
              } else {
                  mem[0] = nums[i];
              }
              max = Math.max(max, mem[0]);
              if (mem[1]) {
                  mem[1] *= nums[i];
                  max = Math.max(max, mem[1]);
              }
          } else {
              // nums[i] < 0
              // 需要重置 mem，有点 tricky
              let tmp;
              if (mem[0] && mem[1]) {
                  tmp = mem[0];
                  mem[0] = nums[i] * mem[1];
                  mem[1] = nums[i] * tmp;
                  max = Math.max(max, mem[0]);
              } else if (mem[0]) {
                  // mem 没有负值
                  mem[1] = nums[i] * mem[0];
                  mem[0] = undefined;
              } else {
                  // mem 没有正值
                  mem[0] = mem[1] * nums[i];
                  mem[1] = nums[i];
                  max = Math.max(max, mem[0]);
              }
          }
      }
  }
  return max;
};