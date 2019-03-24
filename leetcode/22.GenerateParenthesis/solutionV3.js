/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let left, right;
    
    res.push('(');
    while (res[0].length < n * 2) {
        next = [];
        let len = res[0].length;
        res.forEach(item => {
            left = item.replace(/\)/g, '').length;
            right = len - left;
            if (left === right) {
                next.push(item + '(');
            } else if (left > right) {
                if (left === n) next.push(item + ')');
                else {
                    next.push(item + ')');
                    next.push(item + '(');
                }
            }
        });
        res = next;
    }
    return res;
};

let result = generateParenthesis(3);
console.log(result);