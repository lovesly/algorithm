// 还真有个 O（n） 算法
// 我去啊，好蠢

// 这道题真的很经典啊
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0, cur = 0;
    const map = new Map();
    map.set(0, 1);
    for (let i of nums) {
        cur += i;
        if (map.has(cur - k)) {
            // 这里很 tricky 啊，
            // 并不是自加 1，而是加上 cur-k 的所有情况分支，也就是说在累加过程中，有几条路径可以
            // 加起来为 cur-k。
            count += map.get(cur-k);
        }
        map.set(cur, (map.get(cur) || 0) + 1);
    }
    return count;
};
const arr = [1, 2, 3];
subarraySum(arr, 3);