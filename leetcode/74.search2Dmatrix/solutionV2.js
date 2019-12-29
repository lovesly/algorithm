/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 丑陋，what a shame
var searchMatrix = function(matrix, target) {
    if (!Array.isArray(matrix) || matrix.length == 0)
        return false;
    const m = matrix.length;
    const n = matrix[0].length;
    const nMid = ~~(n/2);

    let mStart = 0, mEnd = m - 1;
    while(mStart <= mEnd) {
        const x = ~~((mStart + mEnd)/2);
        if (matrix[x][nMid] === target) return true;
        else if (matrix[x][nMid] < target) {
            if (matrix[x][n-1] >= target) return bsLine(matrix[x], nMid+1, n-1, target);
            else mStart = x + 1;
        } else {
            if (matrix[x][0] <= target) return bsLine(matrix[x], 0, nMid-1, target);
            else mEnd = x - 1;
        }
    }
    
    return false;
};

const bsLine = (arr, s, e, target) => {
    while(s <= e) {
        const mid = ~~((s + e)/2);
        if (arr[mid] === target) return true;
        else if (arr[mid] < target) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }
    return false;
};
