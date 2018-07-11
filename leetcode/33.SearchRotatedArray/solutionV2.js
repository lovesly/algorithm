
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
    var search = function(nums, target) {
        const len = nums.length
        let index = 0
      
        if (len !== 1 && nums[0] !== target) {
          if (nums[0] > target) {
            index = len - 1
            while (nums[index] > target) {
              if (index === 1) break
              index--
            }
          } else {
            index++
            while (nums[index] < target) {
              if (index === len - 1) break
              index++
            }
          }
      
        }
      
        return nums[index] === target ? index : -1
      };

// zhe ta ma bu shi O(logn) ba...