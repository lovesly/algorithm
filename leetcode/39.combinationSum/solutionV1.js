var combinationSum = function(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    let end = candidates.length - 1;
    function helper(target, end, cur) {
        // return
        if (target === 0) {
            return res.push(cur);
        } else if (target < candidates[0] || end < 0) {
            return;
        }
        // recursive call
        while (end >= 0 && candidates[end] > target) {
            end--;
        }
        for (let i = end; i >= 0; i--) {
            let tmp = [...cur, candidates[i]];
            helper(target - candidates[i], i, tmp);
        }
    }
    helper(target, end, []);
    return res;
};

// test
// [3,12,9,11,6,7,8,5,4]

console.log(combinationSum(
[48,22,49,24,26,47,33,40,37,39,31,46,36,43,45,34,28,20,29,25,41,32,23],
69).toString());

// 这题通过率很好我很不理解.