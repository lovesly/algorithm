/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let [i, j, c, s] = [a.length - 1, b.length - 1, 0, '']

while (i >= 0 || j >= 0 || c === 1) {
    c += +(a[i--] || 0) + +(b[j--] || 0)
    s = (c & 1) + s
    c = c >> 1
}
return s
};

// pretty concise.