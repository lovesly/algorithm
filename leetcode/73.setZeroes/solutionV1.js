/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (!matrix || matrix[0].length === 0) return;
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                // set null
                setNull(i, j);
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === undefined) {
                matrix[i][j] = 0;
            }
        }
    }
    
    function setNull(i, j) {
        matrix[i][j] = undefined;
        for (let x = 0; x < n; x++) {
            if (matrix[i][x] !== 0) matrix[i][x] = undefined;
        }
        for (let y = 0; y < m; y++) {
            if (matrix[y][j] !== 0) matrix[y][j] = undefined;
        }
    }
};

// first pass, bang