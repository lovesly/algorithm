/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    if (!str) return 0;
    let flag = 1;
    let start = 0;
    let res = 0;
    if (str[0] === '-') {
        start++;
        flag = -1;
    } else if (str[0] === '+') {
        start++;
    } 
    let end = start;
    while (str[end] >= '0' && str[end] <= '9') end++;
    str = str.slice(start, end);
    for (let j = 0; j < str.length; j++) {
        res *= 10;
        res += (str[j] - '0');
    }
    res *= flag;
    const min = 1 << 31;
    const max = ~(1 << 31);
    if (res < min) return min;
    if (res > max) return max;
    return res;
};

// deal with every digit
// problem is this doesn't check the overflow inside for loop. 