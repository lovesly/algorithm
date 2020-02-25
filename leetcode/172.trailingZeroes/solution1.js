/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res = 0;
    for (let i = 5; i <= n; i+=5) {
        let j = i;
        while (j % 5 == 0) {
            res++;
            j = j/5;
        }
    }
    return res;
};