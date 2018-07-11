/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let res = -1, start = 0, end = nums.length - 1;
    let mid;
    // what if length === 1?
    while (start <= end) {
        mid = ~~((start + end)/2);
        if (nums[mid] === target) return mid;
        // shrink 
        if (nums[mid] >= nums[start]) {
            // 4 5 6 | 7 0 1 2 3 case or 0 1 2 3 4 5 6 7
            if (target >= nums[start] && target < nums[mid]) {
                // left part
                end = mid - 1;
            } else {
                // right part 
                start = mid + 1;
            }
        } else {
            // 4 5 6 7 0 | 1 2 3 case
            if (target > nums[mid] && target <= nums[end]) {
                // right part
                start = mid + 1;
            } else {
                // left part
                end = mid - 1;
            }
            
        }
    }
    return res;
};

// beautiful.
// forget one case, when start === end, it will break the loop