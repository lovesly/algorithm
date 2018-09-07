/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid || grid.length == 0) return null;
    const m = grid.length;
    const n = grid[0].length;
    
    const map = Array(m).fill(0).map(el => Array(n).fill(0));
    map[m-1][n-1] = grid[m-1][n-1];
    // setup last col/row
    for (let i = m-2; i >= 0; i--) {
        map[i][n-1] = grid[i][n-1] + map[i+1][n-1];
    }
    for (let i = n-2; i >= 0; i--) {
        map[m-1][i] = grid[m-1][i] + map[m-1][i+1];
    }
    for (let i = m-2; i >= 0; i--) {
        for (let j = n-2; j >= 0; j--) {
            map[i][j] = grid[i][j] + Math.min(map[i+1][j], map[i][j+1]);
        }
    }
    return map[0][0];
};

// same idea with uniquePath