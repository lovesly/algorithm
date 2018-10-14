/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
    // special case for 1?
    if (N <= 2) return 1;
    let res = 1;
    let end = ~~(N/2) + 1;
    for (let i = 1; i <= end; i++) {
        let jEnd = end + 1 - i;
        for (let j = 1; j <= jEnd; j++) {
            if (N === i * j + j * (j - 1) / 2) {
                // valid
                res++;
            }
        }
    }
    return res;
};

// O(N^2) too slow