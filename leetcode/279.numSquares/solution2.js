/**
 * @param {number} n
 * @return {number}
 */
// 提升巨大，真牛逼啊。
var numSquares = function(n) {
    const dp = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        let min = i;
        // 相当于计算每一个小于n的平方数。
        for (let j = 1; k = i - j * j, k >= 0; j++) {
            // 去掉当前这个平方数后，直接用 dp 求解。
            min = Math.min(min, dp[k] + 1);
        }
        dp[i] = min;
    }
    return dp[n];
};