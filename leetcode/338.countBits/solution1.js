/**
 * @param {number} num
 * @return {number[]}
 */
// solution1
var countBits = function(num) {
    const res = [];
    for (let i = 0; i <= num; i++) {
        res[i] = calBits(i);
    }
    return res;
};

const calBits = (num) => {
    let res = 0;
    while (num) {
        res++;
        num = num & (num-1);
    }
    return res;
};