var findTargetSumWays = function(nums, S) {
    if (!nums.length) return 0;
    const dp = Array(nums.length).fill(0).map(item => []);
    dp[0][1000 + nums[0]] = 1;
    dp[0][1000 - nums[0]] = (dp[0][1000 - nums[0]] || 0) + 1;
    for (let i = 1; i < nums.length; i++) {
        // 优化1：不需要二维数组，一维就可以
        // 优化2：用一个数组记录有值的 sum, 不需要每次遍历2000个
        for (let sum = -1000; sum <= 1000; sum++) {
            if (dp[i-1][sum+1000]) {
                dp[i][sum+1000+nums[i]] = (dp[i][sum+1000+nums[i]] || 0) + dp[i-1][sum+1000];
                dp[i][sum+1000-nums[i]] = (dp[i][sum+1000-nums[i]] || 0) + dp[i-1][sum+1000];
            }
        }
    }
    return S > 1000 ? 0 : (dp[nums.length-1][S + 1000] || 0);
};

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    if (!nums.length) return 0;
    // 改个初始化，差距这么大吗。。看来，每次循环里少判断一下是否为0，真的会快很多
    const dp = Array(nums.length).fill(0).map(item => Array(2001).fill(0));
    dp[0][1000 + nums[0]] = 1;
    dp[0][1000 - nums[0]] = dp[0][1000 - nums[0]] + 1;
    for (let i = 1; i < nums.length; i++) {
        // 优化1：不需要二维数组，一维就可以
        // 优化2：用一个数组记录有值的 sum, 不需要每次遍历2000个
        for (let sum = -1000; sum <= 1000; sum++) {
            if (dp[i-1][sum+1000]) {
                dp[i][sum+1000+nums[i]] = dp[i][sum+1000+nums[i]] + dp[i-1][sum+1000];
                dp[i][sum+1000-nums[i]] = dp[i][sum+1000-nums[i]] + dp[i-1][sum+1000];
            }
        }
    }
    return S > 1000 ? 0 : dp[nums.length-1][S + 1000];
};