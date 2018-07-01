/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const res = [];
    if (!digits) return res; // or null
    const sheet = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        
    helper("", 0, digits, sheet, res);
    
    return res;
};

function helper(base, start, digits, sheet, res) {
    if (start === digits.length) {
        res.push(base);
        return;
    }
    let digit = digits[start] - "0";
    // if (digit < 2 || digit > 9) helper(base, start+1, digits, sheet);
    let options = sheet[digit-2].split("");
    for (let j = 0; j < options.length; j++) {
        helper(base + options[j], start+1, digits, sheet, res);
    }
}

// recursion

