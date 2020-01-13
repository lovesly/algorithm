/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 这个厉害，但是如何证明算法的正确性？
    if (!nums || !nums.length) return null;
    let count = 1, cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== cur) {
            count--;
            if (count === 0) {
                cur = nums[i];
                count++;
            }
        } else {
            count++;
        }
    }
    return cur;
};