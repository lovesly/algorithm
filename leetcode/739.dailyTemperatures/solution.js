/**
 * @param {number[]} T
 * @return {number[]}
 */
// 用栈记录未计算出来的日期以及温度。
// 之所以用栈先入后出的特性，是因为我们只关心递增的关系，递增意味着之前储存的值可以pop出来计算结果了
// 而递减，或者相等，意味着暂时无法计算，需要存入栈中。那么栈里的值，也是递减的顺序。
var dailyTemperatures = function (T) {
    if (!Array.isArray(T) || T.length === 0) return T;
    const res = Array(T.length).fill(0);
    const stack = [];
    for (let i = 0; i < T.length; i++) {
        let len = stack.length;
        while (len && stack[len - 1][1] < T[i]) {
            let cur = stack.pop();
            res[cur[0]] = i - cur[0];
            len--;
        }
        stack.push([i, T[i]]);
    }
    return res;
};