/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let changed = false;
    const len = nums.length;
    
    let from = len - 2;
    while (from >= 0 && nums[from + 1] <= nums[from]) {
      from--;
    }
  
    if (from >=0) {
      let to = len - 1;
      while (to > from && nums[to] <= nums[from]) {
        to--;
      }
      swap(nums, from, to);
    }
  
    for (var i = from + 1, j = len - 1; i < j; i++, j--) {
      swap(nums, i, j);
    } 
  };
  
  function swap(array, from, to) {
    array[to] = array[from] + array[to];
    array[from] = array[to] - array[from];
    array[to] -= array[from];
  }

  // same idea.