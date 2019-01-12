/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string') return '';
    if (num1 === "0" || num2 === "0") return "0"
    const map = [];
    let res = "", previous = "";
    const len1 = num1.length, len2 = num2.length;
    for (let i = len2 - 1; i >= 0; i--) {
        // weird
        const posI = len2 - i - 1;
        const val2 = num2[i];
        let cur = 0, digit = 0;        
        res = ""; // test
        for (let j = len1 - 1; j >= 0; j--) {
            const posJ = len1 - j - 1;
            cur = parseInt(val2) * parseInt(num1[j]) + digit;
            let len = previous.length, pos = posI + posJ;
            // confusing
            if (len > pos) {
                // start from pos to the end
                cur += parseInt(previous[len - 1 - pos]); 
            }
            digit = ~~(cur/10);
            cur = cur % 10;
            // cal res
            res = cur + res;
        }
        // if digit
        if (digit != 0) res = digit + res;
        res += previous.slice(previous.length - posI);
        previous = res;
    }
    console.log(res);
    return res;
};
// holy shit this is ugly. 