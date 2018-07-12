
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    }
    return nums.filter(el => el < target).length;
};

// 就是服这帮善用内置方法的逼