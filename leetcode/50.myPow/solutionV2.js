/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var num = x ** n
    return Number(num.toFixed(5))
  };

// 虽然是用现成的， 无关算法的解法。
// 不过这个 ** 很巧妙啊， 我没见过。