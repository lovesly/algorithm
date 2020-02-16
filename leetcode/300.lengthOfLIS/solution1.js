/**
 * @param {number[]} nums
 * @return {number}
 */
// too fucking slow..
var lengthOfLIS = function(nums) {
    let max = 0;
    const dp = [];
    // stupid solution
    for (let i = nums.length - 1; i >= 0; i--) {
        const cur = nums[i];
        let count = 1;
        for (let j = i+1; j < nums.length; j++) {
            if (cur < nums[j]) {
                let res = 1 + dp[j];
                count = Math.max(count, res);
            }
        }
        max = Math.max(max, count);
        dp[i] = count;
    }
    return max;
};