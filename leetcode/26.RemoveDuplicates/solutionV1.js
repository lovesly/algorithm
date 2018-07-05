/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let lastNum = nums[0];
    let nextIndex = 1;
    for (let i = nextIndex, len = nums.length; i < len; i++) {
        if (nums[i] !== lastNum) {
            lastNum = nums[i];
            nums[nextIndex++] = lastNum; 
        }   
    }
    return nextIndex;
};