/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// think too much, I thought you must use out all the words in wordDict
// 我这个，其实是迭代版本的，记忆回溯法。字典中匹配到单词后，会标记当前位置可以到达。
// 这样如果有多条路径可以到达同一个位置，我其实只计算第一个，后面的会跳过。
// 相当于题解3的方法。和 1，2并无本质区别，只不过 1 是暴力递归，2是记忆递归
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