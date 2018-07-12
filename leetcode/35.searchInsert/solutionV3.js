// binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, len = nums.length, end = len - 1, mid;
    while (start <= end) {
        mid = ~~((start + end)/2);
        if (target == nums[mid]) return mid;
        else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};