// 改良版，dfs 迭代
// 有点问题马的
var findTargetSumWays = function(nums, S) {
    if (!nums.length) return 0;
    let res = 0;
    const st = [[0, 0]];
    // recursive, iterative?
    while (st.length) {
        const pop = st.pop();
        const nextIndex = pop[1];
        if (nextIndex === nums.length) {
            if (pop[0] === S) res++;
            continue;
        }
        st.push([pop[0] + nums[nextIndex], nextIndex+1]);
        st.push([pop[0] - nums[nextIndex], nextIndex+1]);
    }
    return res;
};