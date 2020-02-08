/**
 * @param {number[]} nums
 * @return {number}
 */
// 不过这里，其实暗含 boyer-moore 的意思，分解为小问题，最后一定有一边是众数，然后扫一遍就可以最终确认。
var majorityElement = function (nums) {
    // 分治法
    const helper = (start, end) => {
        if (start === end) return nums[start];
        const mid = ~~((start + end) / 2);

        const left = helper(start, mid);
        const right = helper(mid + 1, end);

        if (left === right) return left;
        const leftCount = count(nums, left, start, end);
        const rightCount = count(nums, right, start, end);
        return leftCount > rightCount ? left : right;
    };

    return helper(0, nums.length - 1);
};

const count = (nums, val, s, e) => {
    let res = 0;
    for (let i = s; i <= e; i++) {
        if (nums[i] === val) res++;
    }
    return res;
};

