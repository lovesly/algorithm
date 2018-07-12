/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    for (let i = 0, len = nums.length; i < len; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return nums.length;
};

// 考虑不周， 耻辱。