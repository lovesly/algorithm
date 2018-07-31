/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (typeof s !== 'string') return 0;
    // 1. regexp
    const res = s.match(/\b\w+/g);
    if (res == null) return 0;
    return res.pop().length;
};

// 用正则匹配单词