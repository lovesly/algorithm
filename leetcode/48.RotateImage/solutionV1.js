/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length > 1) {
        const len = matrix.length;
        for (let i = 0, end = len - 1; i < end; i++, end--) {
            // 由外向里， 逐层旋转
            for (let j = i; j < end; j++) {
                // 逐个旋转
                let tmp = matrix[i][j];
                // 计算移动位置的时候， 应该使用 j 相对 i 的增量。
                // 内层旋转的时候应该用 end - index 而不是 end - j
                let index = j - i;
                matrix[i][j] = matrix[end-index][i];
                matrix[end-index][i] = matrix[end][end-index];
                matrix[end][end-index] = matrix[j][end];
                matrix[j][end] = tmp;
            }
        }
    }
};

// super slow. wtf.
// try one more time, beat 97%.
// leetcode sucks.