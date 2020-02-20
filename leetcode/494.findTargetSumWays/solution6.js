// 真牛逼啊，一道 medium 题，大大小小 6种解法，果然数学才是最硬核的。
/**
 * 方法四
 * 动态规划
 * 先用数学方法简化问题
 * 把nums按照数字前面是+和-分成两部分，用sum(p)代表加号数字的和用sum(n)代表减号数字的和用sum代表所有数字的
 * 和，这样问题就转换为找到 sum(p) - sum(n) = S 成立的可能数。
 * 对等式做一些变换：sum(p) = S + sum(n) => sum(p) + sum(p) = S + sum(n) + sum(p)
 * =>：sum(p) = (S + sum) / 2
 * 这样问题就转换为了找出有多少种可能使sum(i)等于一个target, 这里的i和上一个解法中的i意义有些不同，这里的i
 * 是指从前i个元素中任意挑出数字组成一个target
 * 例：
 * 输入 nums: [1,1,1,1,1], S:3，则 i: 0~5, target: 4
 * 用二维数组dp表示为：
 * i \ j |  0 |  1 |  2 |  3 |  4 |
 * 0 (-) |  1 |  0 |  0 |  0 |  0 |
 * 1 (1) |  1 |  1 |  0 |  0 |  0 |
 * 2 (1) |  1 |  2 |  1 |  0 |  0 |
 * 3 (1) |  1 |  3 |  3 |  1 |  0 |
 * 4 (1) |  1 |  4 |  6 |  4 |  1 |
 * 5 (1) |  1 |  5 | 10 | 10 |  5 |
 * 
 * 递推公式： dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]]
 * 公式解释，公式分两部分
 * 1. dp[i - 1][j]意思是用i - 1个元素组成j的可能数，加入数nums[i]对这个可能数是没影响的，
 * 因为nums[i]加入后可以不用。
 * 2. dp[i - 1][j - nums[i]]意思是用i-1个元素组成j-nums[i]的可能数，那么加入数nums[i]后为每
 * 种可能加上nums[i]后dp[i][j]都成立。
 * 所以dp[i][j]是1，2两种情况可能数的和。
 * 这个公式在空间上还能优化为一维数组, dp[j] = dp[j] + dp[j - nums[i]]。
 * 需要倒序迭代j，这样当我们在求得dp[j]时dp[j - nums[i]]还是i-1时的值，dp[j]的变化并不会对后面
 * 的计算产生影响。
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    // 求的sum
    const sum = nums.reduce((acc, num) => acc + num, 0);

    // sum小于S或者sum+S不能被2整除则无解
    if (sum < S || (sum + S) % 2 == 1) {
        return 0;
    }
    // 找到新的target
    const target = (S + sum) / 2;
    //初始化一个数组
    const dp = new Array(target + 1);
    dp.fill(0);
    dp[0] = 1;

    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }
    return dp[target];
};