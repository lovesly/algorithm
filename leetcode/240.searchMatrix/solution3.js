// 二分查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) return false;
    const row = matrix.length;  
    const col = matrix[0].length;
    
    const binarySearch = (start, target, searchRow) => {
        let lo = start, mid;
        if (searchRow) {
            hi = col - 1;
            while (lo <= hi) {
                mid = ~~((lo + hi)/2);
                if (matrix[start][mid] === target) return true;
                else if (matrix[start][mid] < target) lo = mid+1;
                else hi = mid-1;
            }
        } else {
            hi = row - 1;
            while (lo <= hi) {
                mid = ~~((lo + hi)/2);
                if (matrix[mid][start] === target) return true;
                else if (matrix[mid][start] < target) lo = mid+1;
                else hi = mid-1;
            }
        }
        return false;
    };

    const end = Math.min(row, col);
    for (let i = 0; i < end; i++) {
        const row = binarySearch(i, target, true);
        const col = binarySearch(i, target, false);
        if (row || col) return true;
    }
    return false;
};