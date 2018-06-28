/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    // sort
    nums.sort(((a, b) => a - b));
    for (let i = 0, len = nums.length; i < len; i++) {
        // remove dup
        if (i != 0 && nums[i] === nums[i-1]) continue;
        // two sum
        let j = i + 1, k = nums.length - 1, target = -nums[i];
        while (j < k) {
            let tmp = nums[j] + nums[k];
            if (tmp === target) {
                res.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[k] === nums[--k]);
                while (j < k && nums[j] === nums[++j]);
            } else if (tmp > target) {
                while (j < k && nums[k] === nums[--k]);
            } else {
                while (j < k && nums[j] === nums[++j]);
            }
        }
    }
    return res;
};

// test
const data = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(data).toString());

// ugly code