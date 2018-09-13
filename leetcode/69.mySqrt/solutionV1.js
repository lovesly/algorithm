/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    if (x < 4) return 1;
    let start = 1, end = ~~(x/2);
    let mid, sqr;
    while (start < end) {
        mid = ~~((start + end)/2) + 1;
        sqr = mid * mid;
        if (sqr === x) {
            return mid;
        } else if (sqr > x) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    return start;
};
// ugly, what a shame.