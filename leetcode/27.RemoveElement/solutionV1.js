/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums || nums.length === 0) return null;
    let index = 0;
    // first idea, mark and replace
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== val) {
            if (i != index) {
                nums[index] = nums[i];
            }
            index++;
        }
    }
    return index;
};


// not that good, only beat 70%