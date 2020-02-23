/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // 比起除以2，还有一个更好的
    // 每次把最右边的1去掉
    let res = 0;
    let tmp = x ^ y;
    while (tmp > 0) {
        tmp = tmp & (tmp-1);
        res++;
    }
    return res;
};