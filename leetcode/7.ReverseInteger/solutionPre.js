/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    let res = 0;
    let flag = 1;
    if (x < 0) {
        // overflow?
        x = ~x + 1;
        // x *= -1;
        flag = -1;
    }
    while (x > 0) {
        res = res * 10 + x % 10;
        x = ~~(x / 10);
        // x = Math.floor(x/10);
    }
    // overflow, optimalzation?
    if (res < min || res > max) return 0;
    return res * flag;
};

// first try. 
// 1. 32bit, won't overflow, bit-manipulation only works under 32bit
// 2. negative number doesn't matter, won't cause overflow. 