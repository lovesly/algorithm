/**
 * @param {number} num
 * @return {number[]}
 */
// dp solution
// stupid 
// 找规律，线性时间，居然更慢了我去
var countBits = function(num) {
    const dp = [0];
    let preMax = 1, curMax = 1;
    for (let i = 1; i <= num; i++) {
        if (i == curMax) {
            dp[i] = 1;
            preMax = curMax;
            curMax *= 2;
        } else {
            dp[i] = dp[preMax] + dp[i - preMax];
        }
    }
    return dp;
};