// 动态规划，自底向上
var coinChange = function(coins, amount) {
    const dp = [0];
    for (let i = 1; i <= amount; i++) {
        const arr = [];
        for (let c of coins) {
            const idx = i - c;
            // 保证是合法的
            if (idx >= 0 && dp[idx] != undefined) arr.push(i-c);
        }
        // confused, what if dp[i] === -1??
        if (arr.length) {
            dp[i] = Math.min(...arr) + 1;
        }        
    }
    return dp[amount] != undefined ? dp[amount] : -1;
};

// what's the difference?
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(amount+1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let c of coins) {
            const idx = i - c;
            // 保证是合法的
            if (idx >= 0) dp[i] = Math.min(dp[i], dp[idx] + 1);
        }      
    }
    return dp[amount] <= amount ? dp[amount] : -1;
};