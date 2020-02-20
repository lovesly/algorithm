// 一个思路，递归版本，还是慢
// 未经优化的递归，爆栈？上限是多少呢？
var findTargetSumWays = function(nums, S) {
    // 暴力法? 我想复杂了，加减其实和顺序就没关系了。
    // 那就是一个 dfs 的问题了
    // 这个算法效率太低了。。相当于遍历了一个 20 层的树
    // 递归试试
    let res = 0;
    const length = nums.length;
    const helper = (val, index) => {
        if (index == length) {
            if (val == S) res++;
            return;
        }
        // to DO
        const cur = nums[index];
        helper(val+cur, index+1);
        helper(val-cur, index+1);
    };
    if (nums.length) helper(0, 0);
    return res;
};