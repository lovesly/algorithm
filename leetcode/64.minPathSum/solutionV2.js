/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length,
        n = grid[0].length;
    for (var i=0;i<m;i++){
        for(var j=0;j<n;j++) {
            if(i===0 && j>0) {
                grid[i][j] += grid[i][j-1];
            } 
            if(j===0 && i>0){
                grid[i][j] += grid[i-1][j];
            }
            if(i>0 && j>0) {
               grid[i][j] += grid[i-1][j]>grid[i][j-1]? grid[i][j-1] :grid[i-1][j] ; 
            }
        }
    }
    return grid[m-1][n-1];
};