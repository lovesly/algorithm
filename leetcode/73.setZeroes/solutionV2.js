
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var rows = matrix.length;
    if (!rows) return;
    var cols = matrix[0].length;
    var t = [];
    var m = Array(cols).fill(0)
    var hasZero = false
    
    for (var i = 0; i < rows; ++i) {
        hasZero = false
        for (var j = 0; j < cols; ++j) {
            if (matrix[i][j] === 0) {
                hasZero = true
                t[j] = j;
            }

        }
        if (hasZero) matrix[i] = m
    }
    
    for (var i = 0; i < rows; ++i) {
        for (var j = 0; j < cols; -++j) {
            if (t[j] !== undefined) matrix[i][j] = 0
        }
    }
};