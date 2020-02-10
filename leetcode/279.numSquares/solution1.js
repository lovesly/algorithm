// todo
/**
 * @param {number} n
 * @return {number}
 */
// 大概是非常蠢的方法了吧。。。
var numSquares = function(n) {
    const dp = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        // 完全平方数？
        let min = i;
        for (let j = 1; j <= ~~(i/2); j++) {
            if (i === j * j) {
                min = 1;
                break;
            }
            min = Math.min(min, dp[j] + dp[i-j]);
        }
        dp[i] = min;
    }

    return dp[n];
};
