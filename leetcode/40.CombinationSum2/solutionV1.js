/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
        if (i != end && candidates[i] == candidates[i+1]) continue;
        let tmp = [...cur, candidates[i]];
        if (candidates[i] === target) res.push(tmp);
        else helper(target - candidates[i], i-1, tmp);
    }
}
helper(target, end, []);
return res;
};

// remove duplicate