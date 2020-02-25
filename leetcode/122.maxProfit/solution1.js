/**
 * @param {number[]} prices
 * @return {number}
 */
// solution1
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
                // 这里感觉有点问题，因为不一定要在 j+1 买入对吧
                let part2 = dp[j+1] || 0;
                cur = part1 + part2;
                curMax = Math.max(curMax, cur);
            }
        }
        // 为了解决上面的问题，实际上 dpi 的含义不是在当前买入的收益
        // 而是当前买入，不买入的收益。
        dp[i] = Math.max(curMax, dp[i+1] || 0);
        max = Math.max(max, dp[i]);
    }
    return max;
};