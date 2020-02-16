// brutal force
// 比 dp 还要复杂其实
/**
 * @param {number[]} nums
 * @return {number}
 */
// 有case 无法通过，超出时间限制
var lengthOfLIS = function(nums) {
    const helper = (prev, curPos) => {
        if (curPos == nums.length) return 0;
        let taken = 0, notTaken;
        if (nums[curPos] > prev) {
            taken = 1 + helper(nums[curPos], curPos + 1);
        }
        notTaken = helper(prev, curPos + 1);
        return Math.max(taken, notTaken);
    };
    return helper(Number.MIN_SAFE_INTEGER, 0);
};