/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    if (typeof n !== 'number' || n <= 0) return 0;
    // get length
    let str = n.toString();
    let len = str.length;
    let res = 0, pre = 0, base;
    for (let i = 0; i < len; i++) {
        base = powerBase10(len - i);
        if (str[i] === "1") {
            res += (pre * base + n % base + 1);
        } else if (str[i] > "1") {
            res += (pre + 1) * base;
        } else {
            res += pre * base;
        }
        // update pre
        pre = pre * 10 + parseInt(str[i]);
    }
    return res;
};

function powerBase10(n) {
    let res = 1;
    while (--n) {
        res *= 10;
    }
    return res;
}

// 牛逼， 只是 bug free 真是不容易。