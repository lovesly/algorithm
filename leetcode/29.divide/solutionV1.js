/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let flag1 = 1, flag2 = 1, res = 0;
    const min = 1 << 31, max = ~(1 << 31);
    if (dividend === 0) return 0;
    // sign
    if (dividend < 0) {
        flag1 = -1;
        dividend *= -1;
    }
    if (divisor < 0) {
        flag2 = -1;
        divisor *= -1;
    }
    let mult = 1;
    while (dividend >= divisor * 2) {
        divisor *= 2;
        mult *= 2;
    }
    while (dividend >= divisor) {
        dividend -= divisor;
        res += mult;
        while (dividend < divisor && mult > 1) {
            divisor /= 2;
            mult /= 2;
        }
    }
    
    
    res = res * (flag1 * flag2);
    if (res < min || res > max) return max;
    return res;
};

// ugly code, shame on you