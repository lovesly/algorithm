// recursion with memory??
/**
 * @param {number[]} nums
 * @return {number}
 */
// 增加了一个 cache 数组，记录已经计算过的值
// 但是有点抽象，挺不好想的。二维数组
// 通过了，但是巨慢，比 dp 慢多了
var lengthOfLIS = function(nums) {
    const cache = Array(nums.length).fill(0).map(item => []);
    const helper = (prevPos, curPos) => {
        if (curPos == nums.length) return 0;
        let taken = 0, notTaken;
        if (cache[prevPos + 1][curPos] != undefined) return cache[prevPos + 1][curPos];

        if (prevPos == -1 || nums[curPos] > nums[prevPos]) {
            taken = 1 + helper(curPos, curPos + 1);
        }
        notTaken = helper(prevPos, curPos + 1);
        cache[prevPos + 1][curPos] = Math.max(taken, notTaken);
        return cache[prevPos + 1][curPos];
    };
    return helper(-1, 0);
};