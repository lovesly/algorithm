/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;
    let last = 0, nextPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            // same
            if (i <= last + 1) {
                nums[nextPos++] = nums[i]; 
            }
        } else {
            // new
            last = i;
            if (i !== nextPos) {
                nums[nextPos] = nums[i];
            }
            nextPos++;
        }
    }
    return nextPos;
};