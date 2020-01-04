/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// think too much, I thought you must use out all the words in wordDict
// not effecient though
var wordBreak = function(s, wordDict) {
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
            const str = s.slice(start, end + 1);
            if (str == cur) {
                // hit, mark the word used, duplicate? override?
                if (map[start - 1]) {
                    map[end] = distinct([i], map[start - 1]);
                } else {
                    map[end] = [i];
                }
                if (!stack.includes(end+1)) stack.push(end+1);
            }
        }
    }
    // calculate result?
    // return !!map[s.length - 1] && map[s.length - 1].length === wordDict.length;
    return !!map[s.length - 1]
};

const distinct = (a, b) => {
    let arr = [...a, ...b];
    let result = []
    let obj = {};
    for (let i of arr) {
        if (!obj[i]) {
            result.push(i);
            obj[i] = 1;
        }
    }
    return result;
}
