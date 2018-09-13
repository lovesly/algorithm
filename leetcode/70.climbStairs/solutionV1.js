/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const map = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        map[i] = map[i-1] + map[i-2];
    }
    return map[n];
};

// simple dp