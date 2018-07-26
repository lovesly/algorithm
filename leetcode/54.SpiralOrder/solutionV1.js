/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length == 0) return matrix;
    if (matrix.length == 1) return matrix[0];
    const res = [];
    const m = matrix.length, n = matrix[0].length;
    let rowS = 0, rowE = m - 1, colS = 0, colE = n - 1;
    while (true) {
        // left to right
        for (let j = colS; j <= colE; j++) {
            res.push(matrix[rowS][j]);
        }
        if (++rowS > rowE) break;
        // top to bot
        for (let i = rowS; i <= rowE; i++) {
            res.push(matrix[i][colE]);
        }   
        if (--colE < colS) break;
        // right to left
        for (let j = colE; j >= colS; j--) {
            res.push(matrix[rowE][j]);
        }
        if (--rowE < rowS) break;
        // bot to top
        for (let i = rowE; i >= rowS; i--) {
            res.push(matrix[i][colS]);
        }
        if (++colS > colE) break;
    }
    return res;
};

// test
const data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
];

console.log(spiralOrder(data).toString());
// 吃屎了吧， 700ms???