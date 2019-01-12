/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];
  
  const recursiveSubsets = (nums, cur, index) => {
    result.push(cur.slice());
    for (let i = index; i < nums.length; i++) {     
      cur.push(nums[i]);
      recursiveSubsets(nums, cur, i + 1);
      cur.pop();
    }
  };
  
  recursiveSubsets(nums, [], 0);
  return result;
};