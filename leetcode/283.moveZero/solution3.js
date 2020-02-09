// 与方法二很像，但是理念是遍历的时候，通过 swap 操作，维护了一个 全 0 区间。这样当 0 非常多的时候
// 在方法二的末尾，需要逐一补0，方法三就不需要了。不过如果 0 不多，方法三反而不如方法二，因为 swap 操作
// 耗费的步骤更多。
var moveZeroes = function(nums) {
    let availablePos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && i !== availablePos) {
            swap(i, availablePos++);
        }
    }
    function swap(i, j) {
        nums[i] = nums[i] + nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] = nums[i] - nums[j];
    }
};