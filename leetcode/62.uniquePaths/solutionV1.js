/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (!m || !n) return 0;
    if (m === 1 || n === 1) return 1;
    
    const record = Array(n).fill(0).map(el => Array(m).fill(0));
    // initial setup
    for (let i = 0; i < n; i++) {
        record[i][m - 1] = 1;
    }
    for (let j = 0; j < m; j++) {
        record[n-1][j] = 1;
    }
    
    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            record[i][j] = record[i+1][j] + record[i][j+1];
        }
    }
         
    return record[0][0];
};

// I don't even remember what is the name of this solution...shit 
// dynamic programming?