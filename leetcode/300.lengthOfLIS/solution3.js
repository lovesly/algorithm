// dp and binary search
// 这道题，真是不简单
// 我们考虑维护一个列表 tailstails，其中每个元素 tails[k]tails[k] 的值代表 长度为 k+1k+1 的子序列尾部元素的值。
// 如 [1,4,6][1,4,6] 序列，长度为 1,2,31,2,3 的子序列尾部元素值分别为 tails = [1,4,6]tails=[1,4,6]。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 真的挺难想的，主要是 e 的选取，不是 tails.length-1 了，而是 tails.length
// 这样可以覆盖所有case，然后 e = mid，而不是 mid - 1，因为此时的条件是 ，tails【mid】>= cur
// mid 仍然有可能是本次要更新的位置。确实不好写，要考虑的边界条件太多了。
var lengthOfLIS = function(nums) {
    const tails = [];
    // 什么情况，好难写啊。。。。靠
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        let s = 0, e = tails.length;
        // find the pos for cur
        while (s < e) {
           const mid = ~~((s+e)/2);
           if (tails[mid] < cur) s = mid + 1;
           else e = mid; // or mid -1 ?
        }
        tails[s] = cur;
    }
    return tails.length;
};