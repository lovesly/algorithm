/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums || nums.length <= 0) return nums;
    const res = [];
    const len = nums.length;
    // pass in the array, will take too much space, better way?
    function helper(cur, pool) {
        if (cur.length == len) {
            return res.push(cur);
        }
        for (let i = 0, max = pool.length; i < max; i++) {
            let e = pool[i];
            pool.splice(i, 1);
            helper([...cur, e], pool);
            pool.splice(i, 0, e);
        }
    }
    helper([], nums);
    return res;
};

// very slow, shame on you. 
// because you create a cur instance every loop