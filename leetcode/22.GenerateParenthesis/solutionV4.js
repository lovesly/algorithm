// slightly modified version
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let left = 0, right = 0;
    
    res.push('(');
    while (res[0].length < n*2) {
        let strLen = res[0].length;
        let resLen = res.length;
        for (let i = 0; i < resLen; i++) {
            let cur = res.shift();
            left = cur.replace(/\)/g, '').length;
            right = strLen - left;
            if (left === right) {
                res.push(cur + '(');
            } else if (left > right) {
                if (left === n) res.push(cur + ')');
                else {
                    res.push(cur + ')');
                    res.push(cur + '(');
                }
            }
        }
    }
    return res;
};