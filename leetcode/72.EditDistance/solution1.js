/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// b 站小黑哥，讲得相当不错。
// 颇有体会，我决定把经典 dp 都做了。背包，切钢条等等。
// 这个状态转移，是从一个词到另一个词的转换，从空字符串开始
// 从 word1【0，i】 到 word2【0，j】可以通过三种操作：
// 在 word1【0，i-1】到 word2【0，j-1】的基础上，replace i，j
// 在 word1【0，i】到 word2【0，j-1】的基础上，insert word2【j】
// 在 word1【0，i-1】到 word2【0，j】的基础上，delete word1【i】
// 唯一的玄机在 当前两个字母相同时，replace 操作的编辑开销是 0. 无需替换。

var minDistance = function(word1, word2) {
    const col = word1.length;
    const row = word2.length;
    if (!col) return row;
    if (!row) return col;
    // why do we have to fill 0???
    const dp = Array(row+1).fill(0).map(item => []);
    dp[0][0] = 0;
    for (let i = 1; i <= col; i++) dp[0][i] = i;
    for (let i = 1; i <= row; i++) dp[i][0] = i;
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            // 这里写错了，只有当 最后一个字母相同的时候，dp[i][j] = dp[i-1][j-1]。其他
            // 两种情况，即便字母相同，也必须加一。
            const add = word1[j-1] === word2[i-1] ? 1 : 0;
            dp[i][j] = 1 + Math.min(dp[i-1][j-1] - add, dp[i][j-1], dp[i-1][j]);
        }
    }
    return dp[row][col];
};

  