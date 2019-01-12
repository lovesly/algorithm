/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]]; 
    if (!nums || nums.length === 0) return res;
    for (let i = 0; i < nums.length; i++) {
        // loop through res array
        let tmp = [];
        res.forEach((item) => {
            tmp.push([...item, nums[i]])
        });
        res = [...res, ...tmp];
    }

    return res;
};