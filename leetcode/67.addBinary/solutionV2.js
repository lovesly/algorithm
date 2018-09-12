
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = ''
    let up = 0
    const aLen = a.length, bLen = b.length
    for (let i = 1; i <= Math.max(aLen, bLen); i++) {
        const aCur = +a[aLen - i] || 0
            , bCur = +b[bLen - i] || 0
        if (aCur + bCur + up > 1) {
            res = (aCur + bCur + up) - 2 + res
            up = 1
        } else {
            res = aCur + bCur + up + res
            up = 0
        }
    }
    return up === 0 ? res : up + res
};

// use + to convert string to number