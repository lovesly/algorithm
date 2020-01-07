/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// think too much, I thought you must use out all the words in wordDict
var wordBreak = function (s, wordDict) {
    const map = [];
    const stack = [];
    helper(0);
    while (stack.length) {
        const nextStartIndex = stack.pop();
        helper(nextStartIndex);
    }
    function helper(start) {
        if (start > s.length - 1) return;
        for (let i = 0; i < wordDict.length; i++) {
            const cur = wordDict[i];
            const end = start + cur.length - 1;
            if (map[end]) continue;
            const str = s.slice(start, end + 1);
            if (str == cur) {
                map[end] = true;
                if (!stack.includes(end + 1)) stack.push(end + 1);
                if (end == s.length - 1) {
                    stack.length = 0;
                    break;
                }
            }
        }
    }
    // calculate result?
    // return !!map[s.length - 1] && map[s.length - 1].length === wordDict.length;
    return !!map[s.length - 1]
};