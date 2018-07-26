/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums || nums.length == 0) return false;
    if (nums.length == 1) return true;
    let start = 0, end = nums[0], max = end, target = nums.length - 1;
    while (start <= end) {
        for (let i = start; i <= end && i <= target; i++) {
            max = Math.max(max, i + nums[i]);
            if (max >= target) return true;
        }
        if (max == end) return false;
        start = end + 1;
        end = max;
    }  
};

// 需要小心一种情况， 在循环中， end 有可能大于 target。
// 所以 i 从 start 开始， max >= target 可以直接返回。

// 改良
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums || nums.length == 0) return false;
    if (nums.length == 1) return true;
    let start = 0, end = nums[0], target = nums.length - 1;
    for (let i = start; i <= end && i <= target; i++) {
        end = Math.max(end, i + nums[i]);
        if (end >= target) return true;
    }
    return false;
};