/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力法，蠢爆了。。。
// 没看懂为什么 hashtable 可以优化
var subarraySum = function(nums, k) {
    let res = 0;
    if (!nums || !nums.length) return res;
    // cache[j] means sum[0, j]
    const cache = [0];
    // 妄图遍历来解决是不行的，因为包括负数，所以无法判断，加上下一个数
    // 会不会满足题意。
    // 先暴力法解决好了，O(n^2) 复杂度

    for (let i = 0; i < nums.length; i++) {
        cache[i+1] = cache[i] + nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        // 挺 trick 还
        for (let j = i + 1; j <= nums.length; j++) {
            // 遍历，从 i 加到 j 判断是否符合
            // 那么不用写暴力法，可以保存 cache[i][j] 来避免重复计算
            // 这里可以用减法，不需要累加了
            let cur = cache[j] - cache[i];
            if (cur === k) res++;
        }
    }
    return res;
};