/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = 1 << 31;
    const max = ~(1 << 31);
    let res = 0;
    while (x != 0) {
        res = res * 10 + x % 10;
        x = ~~(x / 10);
    }
    if (res < min || res > max) return 0;
    return res;
};

// I'm proud