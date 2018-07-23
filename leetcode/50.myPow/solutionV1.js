/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // special case 
    if (n == 0) return 1;
    if (x == 0 || x == 1) return x;
    // negative x
    const negativeX = x < 0 && n % 2 != 0;
    if (negativeX) x = -x;
    // negative n
    const negativeN = n < 0;
    if (negativeN) n = -n;
    // normal case
    let res = 1;
    while (n > 0) {
        let cur = x, mi = 1;
        while (mi <= ~~(n/2)) {
            cur = cur * cur;
            mi = mi * 2;
        }
        res = res * cur;
        n -= mi;
    }        
    
    if (negativeX) {
        res = -res;
    }
    if (negativeN) {
        res = 1 / res;
    }
    return res;
};

// 不是很好看， 但是一次过， 虽然有点慢。