var combinationSum = function (candidates, target) {
    var result = []
    var temp = []
    var find = function (target, temp, index) {
        for (var i = 0; i <= index; i++) {
            if (candidates[i] > target) {
                continue
            } else if (candidates[i] === target) {
                result.push(temp.concat(candidates[i]))
            } else {
                find(target - candidates[i], temp.concat(candidates[i]), i)
            }
        }
    }
    find(target, temp, candidates.length - 1)
    return result
};

// I can tell that it's a same idea, but much more concise or consice? 
// damn.