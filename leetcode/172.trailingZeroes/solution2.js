/**
 * @param {number} n
 * @return {number}
 */
// 这个很聪明，第一轮看有多少个5，第二轮检测有多少个 25，。。。125 .。。
// 因为前一轮已经计算了，所以每一轮只需要加起来就好。25 有两个5，第一轮已经算了一个
// 那么第二轮就加上剩下的一个。
var trailingZeroes = function(n) {
    let res = 0;
    while (n) {
        res += ~~(n/5);
        n = ~~(n/5);
    }
    return res;
};

var trailingZeroes = function(n) {
    let res = 0;
    while (n) {
        n = parseInt(n/5);
        res += n;
    }
    return res;
};