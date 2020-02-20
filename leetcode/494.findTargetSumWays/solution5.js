var findTargetSumWays = function(nums, S) {
    if (!nums.length) return 0;
    // 优化1：不需要二维数组，一维就可以
    // 好像一个不行，需要至少两个数组。。。
    // 实际结果，并没有减少内存。。
    let dpPre = Array(2001).fill(0);
    let dpCur = Array(2001).fill(0);
    // 优化2：用一个数组记录有值的 sum, 不需要每次遍历2000个
    // 也不是非常好操作，因为这个 cache 也是个双缓冲
    let indexPre = new Set([1000 + nums[0], 1000 - nums[0]]);
    let indexCur = new Set();
    dpPre[1000 + nums[0]] = 1;
    dpPre[1000 - nums[0]] += 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j of indexPre) {
            dpCur[j + nums[i]] = dpCur[j + nums[i]] + dpPre[j];
            // 如何确定 j + 1000 - nums[i] 大于０呢？
            // 因为初始位置为1000，所以可以保证，只要此处dp【j】有值不为0，那么肯定满足条件
            dpCur[j - nums[i]] = dpCur[j - nums[i]] + dpPre[j];
            indexCur.add(j + nums[i]);
            indexCur.add(j - nums[i]);
        }
        // 交替双缓冲数组
        dpPre.length = 0;
        dpPre = dpCur;
        // 这里初始化0，减少 undefined 的判断，真的快了很多我靠
        dpCur = Array(2001).fill(0);
        // 交替双缓冲
        [indexPre, indexCur] = [indexCur, indexPre];
        indexCur.clear();
    }
    return S > 1000 ? 0 : dpPre[S + 1000];
};