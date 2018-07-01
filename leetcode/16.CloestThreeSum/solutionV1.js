var threeSumClosest = function(nums, target) {
    // invalid input
    if (nums.length <= 0) return target; // or null ?
    let res, closest = ~(1 << 31), len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        // initial, integer.max or undefined?
        // remove dup, while or continue
        if (i != 0 && nums[i] === nums[i - 1]) continue;
        let _target = target - nums[i];
        let j = i + 1, k = len - 1;
        // two sum 
        while (j < k) {
            let cur = nums[j] + nums[k];
            if (cur === _target) return cur + nums[i];
            else if (cur < _target) {
                j++;
            } else {
                k--;
            }
            if (Math.abs(cur - _target) < closest) {
                closest = Math.abs(cur - _target);
                res = nums[i] + cur;
            }
        }
    }
    
    return res;
};

console.log(threeSumClosest([0, 1, 2], 3));