// first thought, use nextPermutation
// pretty basic, but very slow.
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
    let res = [];
    for (let i = 0; i < n; i++) res.push(i+1);
    while (k > 1) {
        nextPermutation(res);
        k--;
    }
    return res.join("");
};

const nextPermutation = function(nums) {
    let modified = false;
    for (let len = nums.length, i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            // find the smallest number larger than nums[i]
            for (let k = len - 1; k > i; k--) {
                if (nums[k] > nums[i]) {
                    // swap and break
                    swap(i, k, nums);
                    break;
                }
            }
            // reverse from i+1 to len-1
            let mid = ~~((len+i+1)/2);
            let len2 = len + i;
            for (let j = i+1; j < mid; j++) {
                // swap nums[j] nums[len2 - j]
                swap(j, len2 - j, nums);
            }
            modified = true;
            break; 
        }
    }
    function swap(i, j, nums) {
        nums[i] = nums[i] + nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] = nums[i] - nums[j];
    }
    if (!modified) {
        // reverse
        nums.reverse();
        // or reverse nums manually
    }
};