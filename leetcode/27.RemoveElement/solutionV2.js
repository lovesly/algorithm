/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    var j=0
    for (i= 0; i < nums.length; i++) {
      if (nums[i] != val) {
        nums[j++]=nums[i]
      }
    }
    return j
  }
  