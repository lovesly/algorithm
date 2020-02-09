var moveZeroes = function(nums) {
    let availablePos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[availablePos++] = nums[i];
        }
    }
    // 补0
    for (let i = availablePos; i < nums.length; i++) {
        if (nums[i] !== 0) nums[i] = 0;
    }
};