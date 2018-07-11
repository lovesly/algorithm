/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, len = nums.length, end = len - 1, res = [-1, -1], mid;
    while (start <= end) {
        mid = ~~((start + end)/2);
        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            // nums[mid] = target;
            let l = mid - 1, r = mid + 1;
            let lmid, rmid;
            res = [mid, mid];
            // find left and right
            while (start <= l) {
                lmid = ~~((start + l)/2);
                if (nums[lmid] < target) {
                    start = lmid + 1;
                } else {
                    res[0] = lmid;
                    l = lmid - 1;
                }
            }
            while (r <= end) {
                rmid = ~~((end + r)/2);
                if (nums[rmid] > target) {
                    end = rmid - 1;
                } else {
                    res[1] = rmid;
                    r = rmid + 1;
                }
            }
            break;
        }
    }
    return res;
};
// 这么一看写js果然很多蠢货， 说了要logn， 他妈的居然都给我遍历。。。