/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 这不就是平房和吗，问你最少用几个平方和加起来等于 target
// 一个思路是 bfs，将其转化为树形，第一个余额为0的就是答案
// 另一个就是 动态规划了吧
// 超时了。。
var coinChange = function(coins, amount) {
    let res = -1;
    if (!amount) return res;
    // how to optimize it with a cache arr?
    const cache = [];
    const st = [amount];
    let level = 0;
    while (st.length) {
        let len = st.length;
        level++;
        while (len-- > 0) {
            const cur = st.shift();
            for (let i = 0; i < coins.length; i++) {
                if (cur === coins[i]) return level;
                else if (cur > coins[i]) {
                    st.push(cur - coins[i]);
                }
            }
        }
    }
    return res;
};