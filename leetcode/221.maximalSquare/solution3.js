/**
 * @param {character[][]} matrix
 * @return {number}
 */
// optimized solution 2
var maximalSquare = function(matrix) {
    if (!matrix || !matrix.length) return 0;
    let max = 0, pre = 0;
    const row = matrix.length;
    const col = matrix[0].length;
    const dp = Array(col+1).fill(0);

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            const temp = dp[j];
            if (matrix[i-1][j-1] == "1") {
                dp[j] = Math.min(dp[j-1], dp[j], pre) + 1;
                max = Math.max(max, dp[j]);
            } else {
                dp[j] = 0;
            }
            pre = temp;
        }
    }
    return max * max;
};

const arr = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
maximalSquare(arr);