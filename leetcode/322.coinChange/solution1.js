/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 这不就是平房和吗，问你最少用几个平方和加起来等于 target
// 一个思路是 bfs，将其转化为树形，第一个余额为0的就是答案
// 另一个就是 动态规划了吧
// 就算用了 cahce 仍然超时了。。。
// 看来这是 bfs 的上限了？
var coinChange = function(coins, amount) {
    let res = -1;
    if (!amount) return amount;
    coins.sort((a, b) => a - b);
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
                else {
                    const val = cur - coins[i];
                    if (val > 0 && !cache.includes(val)) {
                        cache.push(val);
                        st.push(val);
                    }
                }
            }
        }
    }
    return res;
};

// c++ 就没超
// confused
var coinChange = function(coins, amount) {
    let res = -1;
    if (!amount) return amount;
    coins.sort((a, b) => b - a);
    const cache = new Set();
    const st = [amount];
    let level = 1;
    let len = st.length;
    while (len-- > 0) {
        const cur = st.shift();
        for (let i = 0; i < coins.length; i++) {
            if (cur === coins[i]) return level;
            else {
                const val = cur - coins[i];
                if (val > 0 && !cache.has(val)) {
                    cache.add(val);
                    st.push(val);
                }
            }
        }
        if (len == 0) {
            len = st.length;
            level++;
        }
    }
    return res;
};


// solution1, bfs, 用 set 快了好多，看来比数组的 includes 效率高
// set 内部难道也用了 hashmap？
var coinChange = function(coins, amount) {
    let res = -1;
    if (!amount) return amount;
    coins.sort((a, b) => b - a);
    const cache = new Set();
    const st = [amount];
    let level = 1;
    let len = st.length;
    while (len-- > 0) {
        const cur = st.shift();
        for (let i = 0; i < coins.length; i++) {
            if (cur === coins[i]) return level;
            else {
                const val = cur - coins[i];
                if (val > 0 && !cache.has(val)) {
                    cache.add(val);
                    st.push(val);
                }
            }
        }
        if (len == 0) {
            len = st.length;
            level++;
        }
    }
    return res;
};