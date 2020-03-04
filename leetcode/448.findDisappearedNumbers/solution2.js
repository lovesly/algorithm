// 使用负号来标记已经访问过，使用 abs 来计算 index 的值
// 巧妙
var findDisappearedNumbers = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i])-1;
        nums[index] = -Math.abs(nums[index]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i+1);
    }
    return res;
};

var findDisappearedNumbers = function (nums) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var num = Math.abs(nums[i]) - 1;
        if (nums[num] > 0) {
            nums[num] = -nums[num];
        }
    }
    for(var i = 0;i < nums.length; i++) {
        if (nums[i] > 0 ){
            res.push(i + 1)
        }
    }
    return res;
}