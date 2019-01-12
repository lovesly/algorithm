/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (!num1 || !num2) return "";
    const len1 = num1.length, len2 = num2.length;
    const map = Array(len1 + len2).fill(0);
    
    for (let i = len2 - 1; i >= 0; i--) {
        const val = num2[i];
        for (let j = len1 - 1; j >= 0; j--) {
            let cur = (val - '0') * (num1[j] - '0') + map[i + j + 1];
            map[i + j + 1] = cur % 10;
            map[i + j] += ~~(cur / 10);
        }
    }
    
    let res = "";
    for (let i = 0; i < map.length; i++) {
        if (res.length === 0 && map[i] === 0) continue;
        res += map[i];
    }
    return res || "0";
};

// not fast enough, shit.