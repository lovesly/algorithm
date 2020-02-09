// 土鳖办法、
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 本质是先遍历一遍记录 0 的位置，然后再遍历一遍，将各个区间的数字向前移动相应 offset
// 但是判断各个边界，稍稍有点麻烦。不是很好看的代码。

// 还是蠢了，其实只需要遍历一遍，index 标记可用位置，发现0不更新 index 表示跳过就行。马的。愚蠢
var moveZeroes = function(nums) {
    const map = [];
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 0) {
            map.push(i);
        }
    }
    // start 是第一个0的位置，之前的值不需要变
    let start = map.pop(), count = 0;
    while (start != undefined && start < nums.length) {
        let end = map.pop() || nums.length;
        count++;
        while (start < end - count) {
            nums[start] = nums[start+count];
            start++;
        }
        if (start === nums.length - count) {
            // 结束，补0
            while (start < nums.length) nums[start++] = 0;
        }
    }
};