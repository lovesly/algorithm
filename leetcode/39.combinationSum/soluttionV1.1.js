var combinationSum = function(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    let end = candidates.length - 1;
    function helper(target, end, cur) {
        if (target < candidates[0] || end < 0) {
            return;
        }
        // recursive call
        while (end >= 0 && candidates[end] > target) {
            end--;
        }
        for (let i = end; i >= 0; i--) {
            let tmp = [...cur, candidates[i]];
            if (candidates[i] === target) res.push(tmp);
            else helper(target - candidates[i], i, tmp);
        }
    }
    helper(target, end, []);
    return res;
};