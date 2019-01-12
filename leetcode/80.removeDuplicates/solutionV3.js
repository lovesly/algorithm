/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;
    let last = 1, nextPos = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            if (last === 2) continue;
            else last++;
        } else {
            last = 1;
        }
        nums[nextPos++] = nums[i];
    }
    return nextPos;
};
// modified version