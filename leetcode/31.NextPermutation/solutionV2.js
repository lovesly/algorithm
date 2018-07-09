/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let tmp, flag = true
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                tmp = nums[j]
                nums[j] = nums[i]
                nums[i] = tmp
                flag = false
                break
            }
        }
        if (!flag) break
        tmp = nums[i]
        for (let j = i; j < nums.length - 1; j++) {
            nums[j] = nums[j + 1]
        }
        nums[nums.length - 1] = tmp
    }
};
// interesting, how to prove it's correct?