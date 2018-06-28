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
        let tmp = twoSum(-nums[i], i+1, nums);
        if (tmp.length) {
            tmp.forEach(element => {
                res.push([nums[i], ...element]);
            });
        }
    }
    
    return res;
};

/**
 * @param {number} target
 * @return {number[][]}
 */
function twoSum(target, start, nums) {
    const res = [];
    let end = nums.length - 1;
    // use map?
    while (start < end) {
        let tmp = nums[start] + nums[end];
        if (tmp === target) {
            res.push([nums[start], nums[end]]);
            while (start < end && nums[end] === nums[--end]);
            while (start < end && nums[start] === nums[++start]);
        } else if (tmp > target) {
            while (start < end && nums[end] === nums[--end]);
        } else {
            while (start < end && nums[start] === nums[++start]);
        }
    }
    return res;
}

// test
const data = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(data).toString());

// ugly code