// 我靠，压根儿没比 solution 2 慢
// 你说这记忆数组有卵用？
var subarraySum = function(nums, k) {
    // exactly the same thing, if this goes faster, I'll kill myself...
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            let cur = 0;
            for (let j = i; j < nums.length; j++) {
                cur += nums[j];
                if (cur == k) count++;
            }
        }
        return count;
};