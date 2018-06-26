/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = "";
    const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const rome = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    for (let i = 0, len = number.length; i < len && num > 0; i++) {
        if (num < number[i]) continue;
        while (num >= number[i]) {
            num -= number[i];
            res += rome[i];
        }
    }
    return res;
};