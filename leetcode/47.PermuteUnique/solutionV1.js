/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums || nums.length <= 0) return nums;
    const res = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    // need to remove duplicate
    function helper(cur, pool) {
        if (cur.length == len) {
            return res.push(cur);
        }
        for (let i = 0, max = pool.length; i < max; i++) {
            if (i != 0 && pool[i] == pool[i-1]) continue;
            let e = pool[i];
            pool.splice(i, 1);
            helper([...cur, e], pool);
            pool.splice(i, 0, e);
        }
    }
    helper([], nums);
    return res;
};
// piece of cake