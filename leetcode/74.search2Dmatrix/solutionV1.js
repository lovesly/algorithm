/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || 
        matrix[0].length === 0 || target === undefined) {
        return false;
    }
    // first try
    let s = 0, e = matrix.length - 1, m, len = matrix[0].length - 1;
    while (s <= e) {
        m = ~~((s + e)/2);
        if (matrix[m][0] > target) {
            e = m - 1;
        } else if (matrix[m][len] < target) {
            s = m + 1;
        } else {
            // in this row
            let rowS = 0, rowE = len, rowM;
            let cur = matrix[m];
            while (rowS <= rowE) {
                rowM = ~~((rowS + rowE)/2);
                if (cur[rowM] === target) return true;
                else if (cur[rowM] < target) rowS = rowM + 1;
                else rowE = rowM - 1;
            }
            return false;
        }
    }
    return false;
};