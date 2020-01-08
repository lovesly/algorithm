/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || nums.length === 0) return 0;
    const len = nums.length;
    const arr = [nums[0]];
    for (let i = 1; i < len; i++) {
        if (i == 1) {
            arr[i] = Math.max(nums[1], nums[0]);
        } else {
            // 偷第i家，不偷第i家，两种情况
            arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
        }
    }
    return arr[len - 1]
};