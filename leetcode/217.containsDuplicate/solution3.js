// hashmap
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (!nums) return false;
  const map = new Map();
  for (let i of nums) {
      if (map.has(i)) return true;
      else map.set(i, true);
  }
  return false;
};