/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = "", digit = 0;
    const sheet = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                   ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                   ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                   ["", "M", "MM", "MMM"]];
    while (num != 0) {
        let cur = num % 10;
        num = ~~(num / 10);
        res = sheet[digit++][cur] + res;
    }
    return res;
};