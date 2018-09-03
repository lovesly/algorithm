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
    let flag = false;
    // setup last row and last col
    for (let i = n-2; i >= 0; i--) {
        if (flag || obstacleGrid[m-1][i] == 1) {
            obstacleGrid[m-1][i] = 0;
            flag = true;
        } else {
            obstacleGrid[m-1][i] = 1;
        }   
    }
    flag = false;
    for (let i = m-2; i >= 0; i--) {
        if (flag || obstacleGrid[i][n-1] == 1) {
            obstacleGrid[i][n-1] = 0;
            flag = true;
        } else {
            obstacleGrid[i][n-1] = 1;
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

// ugly, careless. 