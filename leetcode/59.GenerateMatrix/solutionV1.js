/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (!n || n < 1) return [];
    if (n == 1) return [[1]];
    // initialize array
    // const res = Array(n).fill([]);
    const res = [];
    for (let i = 0; i < n; i++) res.push([]);
    let rowS = 0, rowE = n - 1, colS = 0, colE = n - 1, start = 1;
    while (true) {
        // left to right
        for (let j = colS; j <= colE; j++) {
            res[rowS][j] = start++;
        }
        if (++rowS > rowE) break;
        // top to bot
        for (let i = rowS; i <= rowE; i++) {
            res[i][colE] = start++;
        }   
        if (--colE < colS) break;
        // right to left
        for (let j = colE; j >= colS; j--) {
            res[rowE][j] = start++;
        }
        if (--rowE < rowS) break;
        // bot to top
        for (let i = rowE; i >= rowS; i--) {
            res[i][colS] = start++;
        }
        if (++colS > colE) break;
    }
    return res;
};

// remember, Array.fill will pass in reference, so if you want to fill object or array, be careful.