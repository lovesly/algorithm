// 动态规划，自上而下
// 思想是一样的呀
// 讲道理，有什么区别？
// 只是我没用递归写, why??wtf??
// 真的快了很多？为什么呢？迭代又一次失败了
// 而且这个还没剪枝，会算出所有的组合
// bfs 的递归怎么写来着？
var coinChange = function(coins, amount) {
    const cache = [];
    const helper = (target) => {
        if (target < 0) return -1;
        if (target == 0) return 0;
        const idx = target - 1;
        if (cache[idx] != undefined) return cache[idx];
        let min = Number.MAX_SAFE_INTEGER;
        for (let c of coins) {
            const res = helper(target - c);
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        cache[idx] = min == Number.MAX_SAFE_INTEGER ? -1 : min;
        return cache[idx];
    };

    return helper(amount);
};