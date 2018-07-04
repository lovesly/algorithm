/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arrS = s.split('');
    let arr = [];

    for(let i = 0, len = arrS.length; i < len; i++) {
        const value = arrS[i];
        if (value === '(' || value === '[' || value === '{') {
            arr.push(value);
        } else {
            if (arr.length === 0) return false;
            const lastValue = arr.pop();

            if (lastValue === '(' && value !== ')') return false;

            if (lastValue === '[' && value !== ']') return false;

            if (lastValue === '{' && value !== '}') return false;
        }
    }

    return arr.length === 0
};