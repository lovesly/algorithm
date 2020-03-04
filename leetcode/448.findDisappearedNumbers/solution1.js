/**
 * @param {number[]} nums
 * @return {number[]}
 */
// not good enough, beat 60%
var findDisappearedNumbers = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]-1 !== i) {
            if (nums[nums[i]-1] !== nums[i]) {
                swap(nums, i, nums[i]-1);
                i--;
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]-1 !== i) res.push(i+1);
    }
    return res;
};

const swap = (arr, i, j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
};