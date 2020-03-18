/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 使用了额外空间，较蠢
var containsDuplicate = function(nums) {
  if (!nums) return false;
  const set = new Set();
  for (let i of nums) {
      set.add(i);
  }
  return nums.length !== set.size;
};

// simplified
var containsDuplicate = function(nums) {
  if (!nums) return false;
  return (new Set(nums)).size !== nums.length;
};

var containsDuplicate = function(nums) {
  if (!nums) return false;
  const set = new Set();
  for (let i of nums) {
    if (set.has(i)) return true;
    else set.add(i);
  }
  return false;
};