/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    for (let i = 0, len = s.length; i < len; i++) {
        let cur = s[i];
        if (cur === '(' || cur === '[' || cur === '{') {
            stack.push(cur);
        } else {
            if (map[cur] !== stack.pop()) 
                return false;
        }
    }
    return stack.length === 0;
};