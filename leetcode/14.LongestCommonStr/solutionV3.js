/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return "";
    var res = strs[0];
    var i = 0;
    while (i < strs.length) {
        // smart
        while (strs[i].indexOf(res) !== 0) {
            var len = res.length - 1;
            res = res.substring(0, len);
        }
        i++;
    }
    
    return res;
};