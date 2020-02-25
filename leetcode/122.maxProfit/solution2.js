/**
 * @param {number[]} prices
 * @return {number}
 */
// solution2
// 这个其实是动态加贪心吧？
// 如何证明正确性呢？
var maxProfit = function(prices) {
    let hold = Number.MIN_SAFE_INTEGER;
    let empty = 0;

    for (let c of prices) {
        const tmp = hold;
        hold = Math.max(empty - c, tmp);
        empty = Math.max(empty, tmp + c);
    }

    return Math.max(hold, empty);
};