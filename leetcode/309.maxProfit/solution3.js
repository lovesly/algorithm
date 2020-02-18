/**
 * @param {number[]} prices
 * @return {number}
 */
// 真牛逼，动态规划压缩变量。太虎了！
// 而且涵盖了所有可能的状态，真的厉害。
// 再去参考一下未压缩的 dp 方法。看看有什么共性
var maxProfit = function(prices) {
    // 参考题解，不过更换了状态定义
    let empty = 0, frozen = 0, hold = Number.MIN_SAFE_INTEGER;
    for (let cur of prices) {
        const pre_empty = empty;
        // 卧槽，顺序要怎么写呢，妈的，真的变蠢了。
        empty = Math.max(empty, frozen);
        frozen = hold + cur;
        hold = Math.max(hold, pre_empty - cur);
    }
    return Math.max(empty, frozen, hold);
};