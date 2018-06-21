/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (!str || str.trim().length === 0) return 0;
    str = str.trim();
    let res;
    let flag = 1;
    const min = 1 << 31;
    const max = ~(1 << 31);
    // get the number
    // don't use parseInt?
    const myMatch = str.match(/(\+|\-)?[0-9]+/);
    if (!myMatch || myMatch.index != 0) {
        return 0;
    } else {
        // deal with the number.
        // what about start with 0 ?
        // need to deal with start 0s
        str = myMatch[0].replace(/(\+|\-)?0*(.+)/, "$1$2");
        if (str.length > 11) {
            return str[0] === "-" ? min : max;
        } else {
            res = new Number(str);
        }
    }
    
    
    // overflow
    if (res < min) return min;
    if (res > max) return max;
    return res;
};

// play with regexp, very interesting. Not a solution