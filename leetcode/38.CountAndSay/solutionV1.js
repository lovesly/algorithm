/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n <= 1) return "1";
    let prev = "1", cur="";
    for (let i = 2; i <= n; i++) {
        // number of char + char
        let len = prev.length, count = 0;
        for (let j = 0; j < len; j++) {
            count++;
            if (j == len - 1 || prev[j] != prev[j+1]) {
                cur += (count + prev[j]);
                count = 0;
            }
        }
        prev = cur;
        cur = "";
    }
    return prev;
};

console.log(countAndSay(5));

// 傻吊leetcodecn，测试环境错了。