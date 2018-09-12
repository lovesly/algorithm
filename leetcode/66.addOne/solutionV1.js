/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 进位 1
    // 转化 => 处理 => 转化 2
    if (!digits || digits.length === 0) return null;
    let t = 1, tmp;
    for (let len = digits.length, i = len-1; i >= 0; i--) {
        tmp = digits[i] + t;
        digits[i] = tmp % 10;
        t = ~~(tmp/10);
        if (t === 0) break;
    }
    // unshift if needed
    if (t === 1) digits.unshift(1);
    return digits;
};