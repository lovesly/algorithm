// 这是我没看懂的解法3
var countBits = function (num) {
    if(num === 0)
        return [0];
    if(num === 1)
        return [0, 1];
    let res = [0, 1];
    for (let i = 1; i <= num; i++) {
        res[i] = res[i >>> 1] + res[i & 1];
    }
    return res;
};