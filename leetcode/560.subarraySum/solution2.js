// 不能小觑一些优化
// 完全一样的理念，人家比你快一倍
// 而且看着很舒服
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // exactly the same thing, if this goes faster, I'll kill myself...
        let count = 0;
        const sum = [];
        sum[0] = 0;
        // 这个有点意思，0 的位置多加了一位，下方就不用考虑 i == j 的情况
        // wtf bro。。。
        for (let i = 1; i <= nums.length; i++)
            sum[i] = sum[i - 1] + nums[i - 1];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j <= nums.length; j++) {
                if (sum[j] - sum[i] == k)
                    count++;
            }
        }
        return count;
};