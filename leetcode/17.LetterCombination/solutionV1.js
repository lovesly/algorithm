/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const code = [
      ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], 
      ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'],
      ['t', 'u', 'v'], ['w', 'x', 'y', 'z']
    ];
    let str = [];
    for (let i = 0, len = digits.length; i < len; i++) {
      let digit = digits.charAt(i) - "0";
      let codestr = code[digit - 2];
      if (str.length === 0) {
        str = codestr;
      } else {
        let tempstr = [];
        for (let j = 0; j < str.length; j++) {
          for (let k = 0; k < codestr.length; k++) {
            tempstr.push(str[j] + codestr[k]);
          }
        }
        str = tempstr;
      }
    }
    return str;
};
// use an tmp array to store current strings