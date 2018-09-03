/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // allow modify original array?
    if (!obstacleGrid || obstacleGrid.length == 0) return 0;
    
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    if (obstacleGrid[m-1][n-1] == 1) return 0;
    obstacleGrid[m-1][n-1] = 1;
    // setup last row and last c
    setup(m-1, null, n-2, false);
    setup(null, n-1, m-2, false);
    function setup(row, col, initial, flag) {
        // detect row or col?
        const isRow = row !== null;
        for (let i = initial; i >= 0; i--) {
            isRow ? (col = i) : (row = i);
            if (flag || obstacleGrid[row][col] == 1) {
                obstacleGrid[row][col] = 0;
                flag = true;
            } else {
                obstacleGrid[row][col] = 1;
            }
        }
    }
    
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            if (obstacleGrid[i][j] == 1) {
                obstacleGrid[i][j] = 0;
            } else {
                obstacleGrid[i][j] = obstacleGrid[i+1][j] + obstacleGrid[i][j+1];
            }
        }
    }
    
    return obstacleGrid[0][0];
};

// modified version
// I guess could refactor with funcitonal programming.