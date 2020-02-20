/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 这也太jb慢了。。。
// 很像微软面试指南的 24点游戏。
// 24点是4张牌，13面值，4个符号加5中括号。
// 这个是 n 个数（牌），非负整数（24点为1到13），2中符号（+-）
// 怎么说呢，维度各有变化，思路是一个思路。来挑战一下
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// brutal force, 超出时间限制了，垃圾算法
var findTargetSumWays = function(nums, S) {
    // 暴力法? 我想复杂了，加减其实和顺序就没关系了。
    // 那就是一个 dfs 的问题了
    let res = 0;
    const st = [];
    // 边界case挺操蛋的
    if (nums.length) {
        const val = nums.pop();
        st.push(val, -val);
    }
    // recursive, iterative?
    while (nums.length || st.length) {
        const cur = nums.pop();
        let len = st.length;
        // 怎么写得漂亮是个问题
        // normal case
        while (cur !== undefined && (len-- > 0)) {
            const val = st.shift();
            st.push(val + cur);
            st.push(val - cur);
        }
        // pop every value in st, add/sub cur, push them back
        // if nums.length = 0, validate the res with target S
        if (nums.length == 0) {
            for (let i of st) {
                if (i == S) res++;
            }
            break;
        }
    }
    return res;
};