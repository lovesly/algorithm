/**
 * @param {number[]} prices
 * @return {number}
 */
// 过了，超级慢他妈的。。
// 究其原因，这其实是一个辅助记忆数组
// 而不是纯依靠状态转移
var maxProfit = function(prices) {
    // dp[i] 表示在当前点买入的最大收益
    const dp = [];
    // transfer ?
    // O(n^2)复杂度，不好
    let max = 0;
    for (let i = prices.length - 1; i >= 0; i--) {
        let curMax = 0;
        for (let j = i + 1; j < prices.length; j++) {
            let cur = 0;
            // 在 j 点卖出
            if (prices[j] > prices[i]) {
                let part1 = prices[j] - prices[i];
                let part2 = dp[j+2] || 0;
                cur = part1 + part2;
                curMax = Math.max(curMax, cur);
            }
        }
        // 买入，卖出，无操作
        dp[i] = Math.max(curMax, dp[i+1] || 0, dp[i+2] || 0);
        max = Math.max(max, dp[i]);
    }
    return max;
};