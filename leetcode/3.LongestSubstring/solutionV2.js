
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    var max = 1, flag = 0
    for(var i = 0; i < s.length; i++) {
        
        var index = s.indexOf(s[i], flag) 
        if (index < i) flag = index + 1;
        
        max = Math.max(max, i - flag + 1)
    }
    return max
};