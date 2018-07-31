/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (typeof s !== 'string') return 0;
    // 2. loop from the end.
    s = s.trim();
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') break;
        res++;
    }
    return res;
};
// loop from end