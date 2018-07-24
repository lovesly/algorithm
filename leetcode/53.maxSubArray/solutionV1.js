/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let acumulator = 0;
    for (let i = 0; i < nums.length; i++) {
        if (acumulator < 0) {
            // reset;
            acumulator = 0;
        }
        acumulator += nums[i];
        if (acumulator > max) max = acumulator;
    }
    
    return max;
};
// 不知道为什么， 很慢，很简洁了对吧， O(n)时间复杂度， 常数空间复杂度

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums) return 0;
    let max = nums[0];
    let acumulator = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (acumulator < 0) {
            acumulator = nums[i];
        } else {
            acumulator += nums[i];
        }
        if (acumulator > max) max = acumulator;
    }
    return max;
};

// 这个就快了一点， 难道是 -Infinity的问题？ 去他妈的似乎受网络影响。