// pure dp
// stupid boy
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || !matrix.length) return 0;
    // 以当前点为右下角的正方形长度
    // 怎么证明正确性呢？这是个很直观，但是感觉又差点意思。。
    let max = 0;
    const row = matrix.length;
    const col = matrix[0].length;
    const dp = Array(row + 1).fill(0).map(item => []);
    // 初始化第一行，第一列，但是注意了，因为我们是从 1，1 开始计算
    // 所以如果只有一列，一行，是没有计算 max 的。所以 dp 数组维度要比 matrix 多 1
    // 这样可以从 0，0开始计算，避开上述情况。不过下面从 matrix 里取值的时候，要记得 i-1，j-1
    // 因为 i，j 遍历的是 dp，index 差1.
    // 大方向对了，边界情况不注意会掉坑里，微软这样会挂掉妈蛋。
    for (let i = 0; i <= row; i++) dp[i][0] = 0;
    for (let i = 0; i <= col; i++) dp[0][i] = 0;

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (matrix[i-1][j-1] == "1") {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
                max = Math.max(max, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return max * max;
};

const arr = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
maximalSquare(arr);