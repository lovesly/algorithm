/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (!nums || nums.length <= 1) return;
    
    // mark pointer?
    let p1 = 0, p3 = nums.length - 1;
    for (let i = 0; i <= p3; i++) {
        if (nums[i] === 0 && i > p1) {
            // swap it with p1, then p1++
            swap(i, p1);
            p1++;
            i--;
            // recalculate i??
        } else if (nums[i] === 2 && i < p3) {
            swap(i, p3);
            p3--;
            i--;
        }
    }
    
    function swap(i, j) {
        nums[i] = nums[i] + nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] = nums[i] - nums[j];
    }
};