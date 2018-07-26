var canJump = function(nums) {
    let len = nums.length - 1;
    for (let i = len - 1;i > 0; i--) {
        if (nums[i] >= (len - i)) {
            len = i;
        }
    }
    return nums[0] >= len;
};
// similar idea with solutionV3