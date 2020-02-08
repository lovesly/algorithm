/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// think too much, I thought you must use out all the words in wordDict
// 我这个，其实是迭代版本的，记忆回溯法。字典中匹配到单词后，会标记当前位置可以到达。
// 这样如果有多条路径可以到达同一个位置，我其实只计算第一个，后面的会跳过。
// 相当于题解3的方法。和 1，2并无本质区别，只不过 1 是暴力递归，2是记忆递归
// 题解2，记忆化回溯
var wordBreak = function (s, wordDict) {

};
