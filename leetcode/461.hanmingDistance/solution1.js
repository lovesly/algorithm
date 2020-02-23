/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let tmp = x ^ y;
    let res = 0;
    // calculate 1s
    while (tmp > 0) {
        res += tmp%2;
        tmp = tmp >> 1;
    }
    return res;
};