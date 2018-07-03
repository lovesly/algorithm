/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < len - 3; i++) {
        if (i !== 0 && nums[i] === nums[i-1]) continue;
        let _target = target - nums[i];
        //three sum
        for (let n = i + 1; n < len - 2; n++) {
            // remove dup
            if (n !== i + 1 && nums[n] === nums[n-1]) continue;
            // two sum
            let j = n + 1, k = len - 1, __target = _target - nums[n];
            while (j < k) {
                let tmp = nums[j] + nums[k];
                if (tmp === __target) {
                    res.push([nums[i], nums[n], nums[j], nums[k]]);
                    while (j < k && nums[k] === nums[--k]);
                    while (j < k && nums[j] === nums[++j]);
                } else if (tmp > __target) {
                    while (j < k && nums[k] === nums[--k]);
                } else {
                    while (j < k && nums[j] === nums[++j]);
                }
            }
        }
    }
    
    return res;
};