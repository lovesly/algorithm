var removeDuplicates = function(nums) {
    if (nums.length <= 2)
        return nums.length;

    let l = 1;
    let v = nums[0];
    let c = 1;

    for (let i = 1; i < nums.length; i++) {
        if (c === 2 && v === nums[i])
            continue;

        if (v === nums[i])
            c++;
        else
            c = 1;

        v = nums[l++] = nums[i];
    }

    return l;
};
// beautiful