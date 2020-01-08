/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = [true];
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // 其实是有点绕的，j的意义是，分割的位置，j为分割左边有多少个字母
            if (dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return !!dp[s.length];
};