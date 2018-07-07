/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;
    
    for (let i = 0, len = haystack.length, len2 = needle.length; i < len - len2 + 1; i++) {
        let j = 0; 
        while (j < len2 && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === len2) return i;
    }
    return -1;
};