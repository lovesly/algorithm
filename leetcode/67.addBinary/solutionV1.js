/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let t = 0, res='', cur, va, vb;
    for (let i = a.length-1, j = b.length-1; i >= 0 || j >= 0; i--, j--) {
        va = i < 0 ? 0 : parseInt(a[i]);
        vb = j < 0 ? 0 : parseInt(b[j]);
        cur = va + vb + t;
        t = ~~(cur/2);
        res = cur%2 + res;
    }
    if (t === 1) {
        res = '1' + res;
    }
    return res;
};

// not efficiency. 