/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    const map = new Map();
    let max = 0;
    for (let i = 0, j = 0, len = s.length; i < len; i++) {
        if (map.has(s[i])) {
            j = Math.max(j, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - j + 1);
    }
    
    return max;
};