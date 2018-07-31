/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s || s.trim().length == 0) return 0;           
    let arr = s.trim().split(' ');
    let arrLast = arr[arr.length - 1];
    return arrLast.length;
};

// the use of split(' ') and trim;
// so after the trim, if s is not empty, the last element in arr
// should be the result.

// 改进版

var lengthOfLastWord_V2 = function(s) {
    if(!s) return 0;    
    s = s.trim();
    return s === '' ? 0 : s.split(' ').pop().length;
};